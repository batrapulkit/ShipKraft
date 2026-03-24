'use client';
import { useState, useRef } from 'react';
import ModuleSelector from './ModuleSelector';

export default function PromptForm({ createProject, userTier, userId }: any) {
  const [mode, setMode] = useState<'text' | 'web-code' | 'vision'>('text');
  const [imageBase64, setImageBase64] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action={createProject} className="prompt-container">
      <input type="hidden" name="inferenceMode" value={mode} />
      <input type="hidden" name="imageBase64" value={imageBase64} />

      <div className="prompt-tabs">
        <button type="button" className={`prompt-tab ${mode === 'text' ? 'active' : ''}`} onClick={() => setMode('text')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          Describe App
        </button>
        <button type="button" className={`prompt-tab ${mode === 'web-code' ? 'active' : ''}`} onClick={() => setMode('web-code')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          Convert Web Code to React Native
        </button>
        <button type="button" className={`prompt-tab ${mode === 'vision' ? 'active' : ''}`} onClick={() => setMode('vision')}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
          Screenshot to Native App
        </button>
      </div>
      
      {mode === 'vision' ? (
         <div style={{padding: '3rem', textAlign: 'center', margin: '0 2rem 1rem', background: '#111', borderRadius: '8px', border: '1px solid #333'}}>
            <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{display: 'none'}} />
            <button type="button" onClick={() => fileInputRef.current?.click()} style={{background: imageBase64 ? '#4caf50' : '#333', color: '#fff', padding: '1rem 2rem', borderRadius: '4px', cursor: 'pointer', border: 'none', fontWeight: 'bold'}}>
               {imageBase64 ? 'Screenshot Attached ✅' : 'Upload iOS/Android Design Mockup'}
            </button>
            <input type="hidden" name="prompt" value="Analyze this UI screenshot and create the architecture." />
         </div>
      ) : (
         <textarea 
           name="prompt"
           required
           className="prompt-textarea" 
           placeholder={mode === 'web-code' ? "Paste your Lovable/v0 React web code here..." : "Describe your React Native app in detail (e.g., A fitness tracker with a profile page)..."}
         ></textarea>
      )}

      {mode !== 'web-code' && <ModuleSelector userTier={userTier} userId={userId} />}

      <div className="prompt-toolbar">
        <div className="toolbar-left">
          <div className="model-selector">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{color: '#ff9800'}}><circle cx="12" cy="12" r="10"></circle></svg>
            EAS Build Server
          </div>
        </div>

        <div className="toolbar-right">
          <select name="aiModel" className="model-selector" style={{background: 'transparent', border: 'none', appearance: 'auto', color: '#fff', cursor: 'pointer', outline: 'none', fontWeight: 600}}>
             <option value="claude-3.5-sonnet" style={{background: '#111', color: '#fff'}}>Claude 3.5 Sonnet</option>
             <option value="gemini-1.5-pro" style={{background: '#111', color: '#fff'}}>Gemini 1.5 Pro</option>
             <option value="gemini-2.5-flash" style={{background: '#111', color: '#fff'}}>Gemini 2.5 Flash</option>
          </select>
          <button type="submit" className="submit-btn" aria-label="Build">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>
          </button>
        </div>
      </div>
    </form>
  );
}
