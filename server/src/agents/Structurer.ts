import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy_key' });

export class Structurer {
  static async planApp(prompt: string, modules: string, inferenceMode: string, imageBase64: string, sendEvent: (data: any) => void) {
    sendEvent({ agent: 'Structurer', message: 'Analyzing core application requirements...', type: 'status' });
    
    let systemPrompt = `You are a Principal Software Architect specializing in React Native and Expo.
Parse the user's prompt and outline the necessary file architecture for the app.
Respond ONLY with a JSON array of objects representing the files needed.
Example:
[
  { "filename": "app/_layout.tsx", "purpose": "Main Expo Router layout with providers" },
  { "filename": "app/index.tsx", "purpose": "Entry screen" }
]`;

    if (inferenceMode === 'web-code') {
       systemPrompt += `\n\nCRITICAL CONTEXT: The user provided RAW WEB REACT CODE (from Lovable/v0). You must architect a file tree that perfectly converts this web code into Mobile React Native components.`;
    } else if (inferenceMode === 'vision') {
       systemPrompt += `\n\nCRITICAL CONTEXT: The user provided a SCREENSHOT of a mobile app design. Analyze the visual elements and architect the exact file structure needed to build it.`;
    }

    try {
      if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'dummy_key') {
         sendEvent({ agent: 'Structurer', message: '⚠️ No API Key Detected. Engaging fast simulated architecture mode...', type: 'status' });
         
         await new Promise(resolve => setTimeout(resolve, 2000));
         
         const simulatedPlan = [
            { filename: 'app/_layout.tsx', purpose: 'Main routing layout' },
            { filename: 'app/index.tsx', purpose: 'Home Screen' }
         ];
          
         const moduleArr = modules.split(',').map(m => m.trim().toLowerCase());
         if (moduleArr.some(m => m.includes('stripe'))) simulatedPlan.push({ filename: 'components/StripeCheckout.tsx', purpose: 'Verified Stripe Template' });
         if (moduleArr.some(m => m.includes('revenuecat'))) simulatedPlan.push({ filename: 'components/Paywall.tsx', purpose: 'Verified RevenueCat Template' });
         if (moduleArr.some(m => m.includes('supabase'))) simulatedPlan.push({ filename: 'lib/supabase.ts', purpose: 'Verified Supabase Template' });
         
         sendEvent({ agent: 'Structurer', message: `Simulated architecture planned: ${simulatedPlan.length} files.`, type: 'status', data: simulatedPlan });
         return simulatedPlan;
      }

      sendEvent({ agent: 'Structurer', message: 'Generating optimal React Native architecture...', type: 'status' });
      let contentsPayload: any = prompt;
      
      // If vision mode, append the inline data to the prompt for Gemini Flash
      if (inferenceMode === 'vision' && imageBase64) {
          contentsPayload = [
            { text: prompt || 'Analyze this UI screenshot and create the architecture.' },
            { inlineData: { data: imageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/jpeg' } }
          ];
      }

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: contentsPayload,
        config: {
          systemInstruction: systemPrompt,
          responseMimeType: 'application/json',
          temperature: 0.1
        }
      });

      const planString = response.text || '[]';
      let plan: any[] = [];
      try {
        plan = JSON.parse(planString);
      } catch(e) {
        // Fallback or cleanup logic
        plan = JSON.parse(planString.replace(/```json\n|\n```/g, ''));
      }
      
      // SHIIPKRAFT CERTIFIED PLUGINS AUTO-INJECTION:
      // If the user requested pro modules, we bypass the AI for those files to avoid halluinations
      const moduleArr = modules.split(',').map(m => m.trim().toLowerCase());
      
      if (moduleArr.some(m => m.includes('stripe'))) {
          sendEvent({ agent: 'System', message: '💎 Injected Certified Module: Stripe Checkout template', type: 'status' });
          plan.push({ filename: 'components/StripeCheckout.tsx', purpose: 'Pre-verified Shipkraft Template for flawless Stripe UI initialization.' });
      }
      if (moduleArr.some(m => m.includes('revenuecat'))) {
          sendEvent({ agent: 'System', message: '💎 Injected Certified Module: RevenueCat Paywall template', type: 'status' });
          plan.push({ filename: 'components/Paywall.tsx', purpose: 'Pre-verified Shipkraft Template for iOS In-App Purchases.' });
      }
      if (moduleArr.some(m => m.includes('supabase'))) {
          sendEvent({ agent: 'System', message: '⚡ Injected Certified Module: Supabase Auth flow', type: 'status' });
          plan.push({ filename: 'lib/supabase.ts', purpose: 'Pre-verified Supabase client implementation.' });
      }
      
      sendEvent({ agent: 'Structurer', message: `Architecture planned successfully: ${plan.length} core files identified.`, type: 'status', data: plan });
      return plan;
    } catch (error: any) {
      sendEvent({ agent: 'Structurer', message: `Error generating plan: ${error.message}`, type: 'error' });
      throw error;
    }
  }
}
