import Link from "next/link";
import "./../../globals.css";

export default function DoneScreen() {
  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', padding: '2rem'}}>
      <div style={{maxWidth: '800px', width: '100%', textAlign: 'center'}}>
        
        <div style={{fontSize: '5rem', marginBottom: '1rem'}}>🎉</div>
        <h1 className="hero-title" style={{fontSize: '3.5rem', marginBottom: '1rem'}}>Your app is ready.</h1>
        <p className="hero-subtitle" style={{marginBottom: '4rem'}}>
          Build completed successfully in 8m 42s.
        </p>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', textAlign: 'left'}}>
           {/* Downloads */}
           <div className="bento-card" style={{padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
             <h3 style={{color: '#fff', fontSize: '1.5rem', marginBottom: '1rem'}}>Downloads</h3>
             <button className="btn btn-primary" style={{width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem'}}>⬇️ Download APK File</button>
             <button className="btn btn-secondary" style={{width: '100%', justifyContent: 'center'}}>⬇️ Download ZIP Archive</button>
             <button className="btn btn-secondary" style={{width: '100%', justifyContent: 'center'}}>🔗 Copy Public Preview Link</button>
             
             <div style={{marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #333'}}>
               <h4 style={{color: '#fff', marginBottom: '0.5rem'}}>How to install</h4>
               <ol style={{color: '#888', fontSize: '0.9rem', paddingLeft: '1.2rem', lineHeight: '1.6'}}>
                 <li>Transfer APK to your Android device</li>
                 <li>Open the file in your file manager</li>
                 <li>Tap "Install" (Allow unknown sources if prompted)</li>
               </ol>
             </div>
           </div>

           {/* Next Steps */}
           <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
             <div className="glass-panel" style={{padding: '2rem', background: '#111'}}>
               <h3 style={{color: '#fff', marginBottom: '1rem'}}>Spread the word</h3>
               <p style={{color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Sharing your preview link is the fastest way to get your first 100 users.</p>
               <button className="btn btn-primary" style={{width: '100%', background: '#1D9BF0', color: '#fff', border: 'none'}}>🐦 Tweet your app</button>
             </div>

             <div className="glass-panel glow-card" style={{padding: '2rem', background: '#0a0a0a'}}>
               <div style={{color: '#fff', fontWeight: 600, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                 Ready for the Play Store?
                 <span style={{background: '#333', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem'}}>UPGRADE</span>
               </div>
               <p style={{color: '#888', fontSize: '0.9rem', marginBottom: '1.5rem'}}>Automatically sign your APK and prepare it for Google Play submission with a Pro plan.</p>
               <Link href="/app/upgrade" className="btn btn-secondary" style={{width: '100%', justifyContent: 'center'}}>View Pro Features &rarr;</Link>
             </div>
           </div>
        </div>

        <div style={{marginTop: '4rem'}}>
          <Link href="/app" className="btn btn-secondary" style={{padding: '1rem 2rem', border: 'none'}}>+ Start a new build</Link>
          <span style={{margin: '0 1rem', color: '#333'}}>|</span>
          <Link href="/app/dashboard" style={{color: '#888', textDecoration: 'underline'}}>Go to Dashboard</Link>
        </div>

      </div>
    </div>
  );
}
