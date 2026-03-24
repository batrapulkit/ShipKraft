import Link from "next/link";
import "./../globals.css";

export default function Pricing() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-spotlight"></div>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem'}}>
        <nav style={{marginBottom: '4rem'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        
        <div className="section-header">
          <h1 className="hero-title" style={{fontSize: '3.5rem'}}>MVP — Day 1 Pricing</h1>
          <p className="section-subtitle">Simple, honest, no tricks. Three tiers. One recommended.</p>
          <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
            <span style={{color: '#fff', fontWeight: 600}}>Monthly</span>
            <div style={{width: '40px', height: '24px', background: '#333', borderRadius: '12px', position: 'relative'}}>
              <div style={{width: '18px', height: '18px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '3px', left: '3px'}}></div>
            </div>
            <span style={{color: '#888'}}>Annual <span style={{color: '#d32f2f', fontSize: '0.8rem'}}>(2 months free)</span></span>
          </div>
        </div>

        <div className="pricing-grid">
          {/* Free */}
          <div className="pricing-card">
            <h3 className="bento-title">Free</h3>
            <div className="price-tag">$0</div>
            <ul className="pricing-list">
              <li>3 APK builds total</li>
              <li style={{ color: "#555" }}>Watermarked preview link</li>
              <li>Community support</li>
            </ul>
            <Link href="/app" className="btn btn-secondary" style={{ width: "100%" }}>Get Started</Link>
          </div>
          {/* Starter */}
          <div className="pricing-card popular" style={{position: 'relative'}}>
            <h3 className="bento-title">Starter</h3>
            <div className="price-tag">$19<span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>/mo</span></div>
            <ul className="pricing-list">
              <li style={{ color: "#fff" }}>10 APK Builds</li>
              <li>Clean Appetize link</li>
              <li>Import from any platform</li>
              <li>ZIP Source download</li>
            </ul>
            <Link href="/app" className="btn btn-primary" style={{ width: "100%" }}>Upgrade</Link>
          </div>
          {/* Pro */}
          <div className="pricing-card">
            <h3 className="bento-title">Pro</h3>
            <div className="price-tag">$49<span style={{ fontSize: '1rem', color: '#666', fontWeight: 400 }}>/mo</span></div>
            <ul className="pricing-list">
              <li>Unlimited builds</li>
              <li>Play Store submission</li>
              <li>Priority queue</li>
              <li>Custom icon + name</li>
            </ul>
            <Link href="/contact" className="btn btn-secondary" style={{ width: "100%" }}>Contact Sales</Link>
          </div>
        </div>

        <section className="section" style={{maxWidth: '800px', margin: '6rem auto 0', borderTop: 'none', padding: '0'}}>
          <h2 style={{fontSize: '2rem', marginBottom: '2rem'}}>Frequently Asked Questions</h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            <div style={{padding: '1.5rem', border: '1px solid #222', borderRadius: '8px', background: '#0a0a0a'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff'}}>What happens after 3 free builds?</h4>
              <p style={{color: '#888'}}>You will hit the paywall. At that point, you can continue to use your existing preview links for free, but to trigger new APK builds, you must upgrade to Starter.</p>
            </div>
            <div style={{padding: '1.5rem', border: '1px solid #222', borderRadius: '8px', background: '#0a0a0a'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff'}}>Do I need a Google Play developer account?</h4>
              <p style={{color: '#888'}}>To build an APK—no. To publish to the Play Store—yes. Our Pro tier will guide you through the submission process.</p>
            </div>
            <div style={{padding: '1.5rem', border: '1px solid #222', borderRadius: '8px', background: '#0a0a0a'}}>
              <h4 style={{fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff'}}>Will it work with my Emergent app?</h4>
              <p style={{color: '#888'}}>Yes. We accept code straight out of Emergent, Lovable, or Bolt. If it uses React Native, it works.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
