'use client';

import { useState } from 'react';
import ProUpsellModal from './ProUpsellModal';

export default function ModuleSelector({ userTier, userId }: { userTier: string, userId: string }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [showUpsell, setShowUpsell] = useState(false);
  const [attemptedModule, setAttemptedModule] = useState("");

  const modules = [
     { id: 'supabase', name: 'Supabase Auth', icon: '⚡', pro: false },
     { id: 'maps', name: 'Google Maps', icon: '🗺️', pro: false },
     { id: 'stripe', name: 'Stripe Payments', icon: '💳', pro: true, glow: true },
     { id: 'revenuecat', name: 'RevenueCat Subscriptions', icon: '💎', pro: true, glow: true },
     { id: 'bluetooth', name: 'Bluetooth BLE', icon: '📡', pro: true },
  ];

  const toggle = (m: any) => {
     if (m.pro && userTier !== 'PRO') {
        setAttemptedModule(m.name);
        setShowUpsell(true);
        return;
     }
     setSelected(prev => prev.includes(m.name) ? prev.filter(x => x !== m.name) : [...prev, m.name]);
  };

  return (
    <div style={{ padding: '0 1.5rem 1.5rem', marginTop: '-0.5rem' }}>
      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 600, letterSpacing: '0.5px' }}>
         CERTIFIED PLUGINS <span style={{fontSize: '0.75rem', fontWeight: 'normal', opacity: 0.7}}>(Guaranteed zero-hallucinations)</span>
      </p>
      
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
         {modules.map(m => (
            <button
               key={m.id}
               type="button"
               onClick={() => toggle(m)}
               style={{
                 display: 'flex',
                 alignItems: 'center',
                 gap: '0.5rem',
                 padding: '0.5rem 1rem',
                 borderRadius: '20px',
                 border: selected.includes(m.name) ? '1px solid #69f0ae' : '1px solid #333',
                 background: selected.includes(m.name) ? 'rgba(105, 240, 174, 0.1)' : 'rgba(20, 20, 20, 0.8)',
                 color: selected.includes(m.name) ? '#fff' : '#aaa',
                 cursor: 'pointer',
                 transition: 'all 0.2s',
                 boxShadow: m.glow && !selected.includes(m.name) ? '0 0 10px rgba(255, 215, 0, 0.1)' : 'none',
                 position: 'relative',
                 overflow: 'hidden'
               }}
            >
               {m.glow && <div style={{position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', animation: 'shimmer 3s infinite'}}></div>}
               <span>{m.icon}</span>
               <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{m.name}</span>
               {m.pro && <span style={{background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: '0.7rem', fontWeight: 'bold', marginLeft: '0.25rem'}}>PRO</span>}
            </button>
         ))}
      </div>

      <input type="hidden" name="modules" value={selected.join(', ')} />

      {showUpsell && (
        <ProUpsellModal moduleName={attemptedModule} onClose={() => setShowUpsell(false)} userId={userId} />
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
         @keyframes shimmer { 100% { left: 200%; } }
      `}} />
    </div>
  );
}
