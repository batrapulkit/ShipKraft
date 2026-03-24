// Optionally using Anthropic for the heavy lifting (since Claude 3.5 Sonnet is amazing at code)
import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenAI } from '@google/genai';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY || 'dummy_key' });
const google = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || 'dummy_key' });

export class Coder {
  static async generateFiles(prompt: string, plan: any[], model: string, inferenceMode: string, imageBase64: string, sendEvent: (data: any) => void) {
    sendEvent({ agent: 'Coder', message: `Beginning generation phase for ${plan.length} files using ${model}...`, type: 'status' });
    
    const generatedFiles: Record<string, string> = {};

    const isSimulation = (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'dummy_key') && (!process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_API_KEY === 'dummy_key');

    for (const file of plan) {
      sendEvent({ agent: 'Coder', message: `Writing source code for ${file.filename}...`, type: 'status' });
      
      const systemPrompt = `You are an expert React Native developer. Write exactly what is asked for the file ${file.filename} using Expo and React Native safe components. No yapping. Only output the code wrapped in \`\`\`tsx ... \`\`\`.`;

      try {
        let fileContent = '';

        if (isSimulation) {
           await new Promise(resolve => setTimeout(resolve, 1500));
           if (file.filename === 'app/_layout.tsx') {
               fileContent = `import { Stack } from 'expo-router';\n\nexport default function Layout() {\n  return <Stack />;\n}`;
           } else {
               fileContent = `import { View, Text, StyleSheet } from 'react-native';\n\nexport default function Screen() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.title}>Shipkraft Simulated UI</Text>\n      <Text style={styles.subtitle}>Add API keys to .env to spawn full logic.</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: { flex: 1, backgroundColor: '#000', alignItems: 'center', justifyContent: 'center' },\n  title: { color: '#fff', fontSize: 24, fontWeight: 'bold' },\n  subtitle: { color: '#888', marginTop: 10 }\n});`;
           }
        } else if (model.includes('claude')) {
          let userMessageContent: any = [{ type: 'text', text: `Please generate the complete React Native code for ${file.filename}` }];
          
          if (inferenceMode === 'vision' && imageBase64) {
             userMessageContent.push({ 
                type: 'image', 
                source: { type: 'base64', media_type: 'image/jpeg', data: imageBase64.replace(/^data:image\/\w+;base64,/, '') } 
             });
             userMessageContent.push({ type: 'text', text: 'Ensure the UI matches the layout, colors, and components seen in this visual screenshot exactly.' });
          } else if (inferenceMode === 'web-code') {
             userMessageContent[0].text += `\n\nTRANSLATE THIS WEB REACT CODE INTO REACT NATIVE EXPO:\n${prompt}`;
          }

          const response = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-latest',
            max_tokens: 4000,
            system: systemPrompt,
            messages: [{ role: 'user', content: userMessageContent }]
          });
          fileContent = (response.content[0] as any).text;
        } else {
          // Fallback to Gemini Pro
          let contentsPayload: any = `Please generate the complete React Native code for ${file.filename}`;
          
          if (inferenceMode === 'vision' && imageBase64) {
              contentsPayload = [
                { text: contentsPayload + '\nEnsure the UI matches the layout and colors seen in this visual screenshot exactly.' },
                { inlineData: { data: imageBase64.replace(/^data:image\/\w+;base64,/, ''), mimeType: 'image/jpeg' } }
              ];
          } else if (inferenceMode === 'web-code') {
              contentsPayload += `\n\nTRANSLATE THIS WEB REACT CODE INTO EXPO:\n${prompt}`;
          }

          const response = await google.models.generateContent({
             model: 'gemini-1.5-pro',
             contents: contentsPayload,
             config: { systemInstruction: systemPrompt }
          });
          fileContent = response.text || '';
        }

        // Clean up markdown codeblocks if AI disobeyed
        fileContent = fileContent.replace(/^```(tsx|typescript|ts|javascript|js)?\n/i, '').replace(/\n```$/i, '');
        
        generatedFiles[file.filename] = fileContent;
        sendEvent({ agent: 'Coder', message: `Completed ${file.filename}`, type: 'status' });
        
      } catch (error: any) {
        sendEvent({ agent: 'Coder', message: `Error generating ${file.filename}: ${error.message}`, type: 'error' });
        // We throw here. In a true robust app we might retry.
        throw error;
      }
    }

    sendEvent({ agent: 'Coder', message: `Successfully generated all ${plan.length} files.`, type: 'status' });
    return generatedFiles;
  }
}
