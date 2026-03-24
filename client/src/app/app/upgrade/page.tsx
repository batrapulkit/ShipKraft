import Link from "next/link";
import "./../../globals.css";

export default function Upgrade() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', background: '#000'}}>
       <div style={{maxWidth: '900px', width: '100%', textAlign: 'center'}}>
          
          <nav style={{marginBottom: '4rem', textAlign: 'left'}}>
             <Link href="/app" className="btn btn-secondary">&larr; Back to App Console</Link>
          </nav>

          <h1 className="hero-title" style={{fontSize: '3rem'}}>You&apos;ve used your 3 free builds.</h1>
          <p className="hero-subtitle">Upgrade to continue building APKs. Your existing browser emulator preview URLs will remain active forever.</p>

          <div className="pricing-grid" style={{textAlign: 'left', marginTop: '4rem'}}>
            {/* Starter */}
            <div className="pricing-card popular" style={{position: 'relative', border: '1px solid var(--border-color)'}}>
              <div style={{ position: 'absolute', top: '-15px', right: '25px', fontSize: '0.75rem', background: '#d32f2f', color: '#fff', padding: '4px 12px', borderRadius: '100px', fontWeight: 'bold' }}>LAUNCH DISCOUNT APPLIED</div>
              <h3 className="bento-title">Starter</h3>
              <div className="price-tag"><span style={{textDecoration: 'line-through', color: '#555', fontSize: '2rem'}}>$19</span> $9<span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>/mo for life</span></div>
              <ul className="pricing-list">
                <li style={{ color: "#fff" }}>10 APK Builds / month</li>
                <li>Clean shareable preview link</li>
                <li>Import from Lovable, Emergent, or ZIP</li>
                <li>ZIP Source download</li>
              </ul>
              <button className="btn btn-primary" style={{ width: "100%" }}>Upgrade with Stripe</button>
            </div>

            {/* Pro */}
            <div className="pricing-card">
              <h3 className="bento-title">Pro</h3>
              <div className="price-tag">$49<span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>/mo</span></div>
              <ul className="pricing-list">
                <li>Unlimited APK Builds</li>
                <li>Dedicated hardware priority queue</li>
                <li>Play Store Submission guidance</li>
                <li>Custom App Icon and Namespace</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: "100%" }}>Upgrade to Pro</button>
            </div>
          </div>
          
          <p style={{marginTop: '2rem'}}>
             <Link href="/app" style={{color: '#666', fontSize: '0.9rem', textDecoration: 'underline'}}>Continue free (Emulators only)</Link>
          </p>
       </div>
    </div>
  );
}
