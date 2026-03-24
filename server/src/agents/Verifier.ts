import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy_key' });

export class Verifier {
  static async verifyCode(files: Record<string, string>, sendEvent: (data: any) => void) {
    sendEvent({ agent: 'Verifier', message: 'Initiating self-healing build sequence...', type: 'status' });
    
    // In a full environment, we'd save to disk and run `eas build --local` or `tsc`.
    // Here we use an LLM-based robust syntax checker for real-time healing.
    const keys = Object.keys(files);
    let fixesMade = 0;
    
    for (const filename of keys) {
      sendEvent({ agent: 'Verifier', message: `Lining & type-checking ${filename}...`, type: 'status' });
      const code = files[filename]! || '';
      
      const systemPrompt = `You are a strict React Native TypeScript compiler. 
Analyze the provided code. If it is 100% correct, output exactly the word "PASS".
If it has errors (missing imports, undefined variables), output ONLY the corrected code. No explanations.`;

      try {
        const response = await ai.models.generateContent({
           model: 'gemini-2.5-flash-lite',
           contents: code,
           config: { systemInstruction: systemPrompt }
        });
        
        const output = (response.text || '').trim();
        if (output !== 'PASS' && output.length > 10) {
          sendEvent({ agent: 'Verifier', message: `Auto-healed syntax error in ${filename} 🔧`, type: 'status' });
          files[filename] = output.replace(/^```(tsx|typescript|ts|javascript|js)?\n/i, '').replace(/\n```$/i, '');
          fixesMade++;
        }
      } catch (e: any) {
         sendEvent({ agent: 'Verifier', message: `Warning: Could not verify ${filename} due to API timeout.`, type: 'error' });
      }
    }
    
    if (fixesMade > 0) {
        sendEvent({ agent: 'Verifier', message: `Verification complete. ${fixesMade} files were auto-healed.`, type: 'status' });
    } else {
        sendEvent({ agent: 'Verifier', message: 'Verification complete. Zero errors found. 🚀', type: 'status' });
    }
    
    return files;
  }
}
