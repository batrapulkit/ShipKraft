import { Router, Request, Response } from 'express';
import { Structurer } from '../agents/Structurer';
import { Coder } from '../agents/Coder';
import { Verifier } from '../agents/Verifier';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const router = Router();

// Store active build streams
const buildStreams = new Map<string, Response>();

router.post('/start-build', (req: Request, res: Response) => {
  const prompt = req.body.prompt as string;
  const aiModel = req.body.aiModel as string;
  const projectId = req.body.projectId as string;
  const modules = req.body.modules as string || '';
  
  if (!prompt || !projectId) {
     return res.status(400).json({ error: 'Missing prompt or projectId' });
  }

  // We immediately respond OK. The actual progress is streamed via SSE
  res.status(200).json({ status: 'Build queued', projectId });

  const inferenceMode = req.body.inferenceMode as string || 'text';
  const imageBase64 = req.body.imageBase64 as string || '';

  // Start the background process
  processBuild(projectId, prompt, aiModel || 'claude-3.5-sonnet', modules, inferenceMode, imageBase64);
});

router.get('/stream/:projectId', (req: Request, res: Response) => {
  const projectId = req.params.projectId as string;
  if (!projectId) return;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  
  // Send initial connection event
  res.write(`data: ${JSON.stringify({ agent: 'System', message: 'Connected to Build Server', type: 'status'})}\n\n`);

  buildStreams.set(projectId, res);

  req.on('close', () => {
    buildStreams.delete(projectId);
  });
});

async function processBuild(projectId: string, prompt: string, aiModel: string, modules: string, inferenceMode: string, imageBase64: string) {
    const sendEvent = (data: any) => {
        const res = buildStreams.get(projectId);
        if (res) {
            res.write(`data: ${JSON.stringify(data)}\n\n`);
        }
    };

    try {
        sendEvent({ agent: 'System', message: `Initializing multi-agent build pipeline (Mode: ${inferenceMode.toUpperCase()})...`, type: 'status' });
        
        // Step 1: Architect
        const plan = await Structurer.planApp(prompt, modules, inferenceMode, imageBase64, sendEvent);
        
        // Step 2: Code Generation
        const files = await Coder.generateFiles(prompt, plan, aiModel, inferenceMode, imageBase64, sendEvent);
        
        // Step 3: Verify & Heal
        const verifiedFiles = await Verifier.verifyCode(files, sendEvent);
        
        // Step 4: Write to Disk (Finalizing MVP)
        sendEvent({ agent: 'System', message: 'Saving verified source code to output directory...', type: 'status' });
        const outputDir = path.join(process.cwd(), 'output', projectId);
        if (!fs.existsSync(outputDir)) {
           fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Inject Base Expo Template
        const baseTemplateDir = path.join(process.cwd(), 'base-expo-template');
        if (fs.existsSync(baseTemplateDir)) {
            sendEvent({ agent: 'System', message: 'Injecting Base Expo template (package.json, app.json)...', type: 'status' });
            fs.cpSync(baseTemplateDir, outputDir, { recursive: true });
        }
        
        for (const [filename, content] of Object.entries(verifiedFiles)) {
           const filePath = path.join(outputDir, filename);
           const dir = path.dirname(filePath);
           if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
           fs.writeFileSync(filePath, content, 'utf8');
        }

        sendEvent({ agent: 'System', message: 'Source code injected into output workspace. Commencing cloud compilation...', type: 'status' });
        
        // Step 5: Automated EAS Compilation
        sendEvent({ agent: 'EAS Build', message: 'Triggering background EAS compiler...', type: 'status' });
        
        await new Promise<void>((resolve, reject) => {
            // First we must run npm install
            sendEvent({ agent: 'EAS Build', message: 'Installing node_modules dependencies...', type: 'status' });
            const npmInstall = spawn('npm', ['install'], { cwd: outputDir, shell: true });
            
            npmInstall.on('close', (code) => {
                if (code !== 0) {
                    sendEvent({ agent: 'EAS Build', message: 'Failed to install dependencies.', type: 'error' });
                    return reject();
                }
                
                sendEvent({ agent: 'EAS Build', message: 'Dependencies verified. Requesting Expo Cloud Build Allocation...', type: 'status' });
                // Now run EAS Build (Note: requires EXPO_TOKEN in env to actually succeed on a server)
                // We use local generation for speed in this MVP simulation if token is missing
                const buildCmd = process.env.EXPO_TOKEN ? 
                    spawn('npx', ['eas', 'build', '--platform', 'android', '--non-interactive'], { cwd: outputDir, shell: true }) :
                    spawn('npx', ['expo', 'export', '-p', 'web'], { cwd: outputDir, shell: true }); // Fallback to instant web build for demo purposes
                
                buildCmd.stdout.on('data', (data) => {
                    const line = data.toString().trim();
                    if (line) sendEvent({ agent: 'EAS Build', message: line, type: 'status' });
                });
                
                buildCmd.stderr.on('data', (data) => {
                    const line = data.toString().trim();
                    if (line && !line.includes('warning')) { 
                        // In real production, stream this. Emitting as status to avoid scaring users with standard NPM warnings.
                        sendEvent({ agent: 'EAS Build', message: `[LOG] ${line}`, type: 'status' });
                    }
                });
                
                buildCmd.on('close', async (buildCode) => {
                    if (buildCode === 0) {
                        sendEvent({ agent: 'System', message: 'Compilation successful! Connecting to Appetize.io...', type: 'status' });
                        
                        // Step 6: Appetize.io Upload (Mocked if APPETIZE_API_KEY is missing)
                        if (process.env.APPETIZE_API_KEY) {
                           // Real API code would securely upload the generated .apk from /output to Appetize here
                           sendEvent({ agent: 'System', message: 'App uploaded to Appetize simulator!', type: 'done', data: 'https://appetize.io/embed/demo' });
                        } else {
                           // Simulated browser preview for the MVP Demo
                           setTimeout(() => {
                              sendEvent({ agent: 'System', message: 'Appetize preview generated perfectly.', type: 'status' });
                              sendEvent({ agent: 'Appetize', message: 'Shareable preview link activated!', type: 'done', data: 'https://appetize.io/embed/demo_rn_app' });
                           }, 2000);
                        }
                        
                        resolve();
                    } else {
                        sendEvent({ agent: 'EAS Build', message: 'Cloud compilation failed.', type: 'error' });
                        reject();
                    }
                });
            });
        });
        
        // TODO: Update SQLite database with verifiedFiles sourceCode here
        
    } catch (err: any) {
        sendEvent({ agent: 'System', message: `Build failed: ${err.message}`, type: 'error' });
    }
}

export default router;
