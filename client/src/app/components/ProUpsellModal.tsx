'use client';
import { useState } from 'react';

export default function ProUpsellModal({ moduleName, onClose, userId }: { moduleName: string, onClose: () => void, userId: string }) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
     setLoading(true);
     // In production, we'd redirect to Stripe Checkout here
     // For this MVP demo, we simply upgrade local state directly
     await fetch('/api/checkout', { method: 'POST', body: JSON.stringify({ userId }) }).catch(() => null);
     
     setTimeout(() => {
        window.location.reload(); // Refresh the page to unlock PRO state
     }, 1500);
  };

  return (
    <div style={{
       position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
       background: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)',
       display: 'flex', alignItems: 'center', justifyContent: 'center',
       zIndex: 9999, animation: 'fadeIn 0.2s ease-out'
    }}>
       <div style={{
          background: '#111', border: '1px solid #333', borderRadius: '16px',
          padding: '3rem', maxWidth: '500px', width: '100%', textAlign: 'center',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 100px rgba(255, 215, 0, 0.1)',
          position: 'relative'
       }}>
          <button onClick={onClose} style={{
             position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', 
             border: 'none', color: '#888', fontSize: '1.5rem', cursor: 'pointer'
          }}>×</button>
          
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💎</div>
          <h2 style={{color: '#fff', fontSize: '1.8rem', marginBottom: '1rem', fontWeight: 700}}>
             Unlock <span style={{background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>{moduleName}</span>
          </h2>
          
          <p style={{color: '#aaa', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem'}}>
             Native features like {moduleName} are incredibly complex for AI to generate from scratch. 
             <br/><br/>
             Upgrade to <strong>Shipkraft PRO</strong> to use our Certified Native Modules. We inject 100% verified, hand-written templates so your build <strong>never crashes</strong>.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left', background: '#0a0a0a', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem'}}>
             <div style={{color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <span style={{color: '#69f0ae'}}>✓</span> Verified 1st-party native integration
             </div>
             <div style={{color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <span style={{color: '#69f0ae'}}>✓</span> Auto-configured app.json & Info.plist
             </div>
             <div style={{color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <span style={{color: '#69f0ae'}}>✓</span> Priority Server-Sent build events
             </div>
          </div>

          <button onClick={handleCheckout} disabled={loading} style={{
             width: '100%', padding: '1rem', background: 'linear-gradient(90deg, #FFD700, #FFA500)',
             color: '#000', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold',
             cursor: loading ? 'wait' : 'pointer', transition: 'all 0.2s', opacity: loading ? 0.7 : 1
          }} onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'} onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}>
             {loading ? 'Connecting to Stripe...' : 'Upgrade to PRO - $20/mo'}
          </button>
       </div>
       
       <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
       `}} />
    </div>
  );
}
