import Link from "next/link";
import "./globals.css";

export default function LandingPage() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="aurora-bg"></div>
      
      <main>
        {/* Navigation */}
        <nav className="container navbar">
          <div className="navbar-logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFF"/>
              <path d="M2 17l10 5 10-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Shipkraft
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link href="/pricing" style={{ fontSize: '0.95rem', color: '#a1a1aa', fontWeight: 500, transition: 'color 0.2s' }} className="hover:text-white">Pricing</Link>
            <Link href="/how-it-works" style={{ fontSize: '0.95rem', color: '#a1a1aa', fontWeight: 500, transition: 'color 0.2s' }}>How it Works</Link>
            <Link href="/app" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>Dashboard</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container" style={{ textAlign: "center", position: "relative", paddingTop: "6rem", paddingBottom: "8rem" }}>
          
          <div className="announcement-pill">
             <div className="announcement-badge">NEW</div>
             Shipkraft Engine 1.0 is now live &rarr;
          </div>

          <h1 className="hero-title">
            Ship your AI app.<br />For real.
          </h1>
          <p className="hero-subtitle">
            Turn any AI-generated code from Lovable, Bolt, or Emergent into a real Android APK + shareable browser emulator. One click. Ten minutes.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/app" className="btn btn-primary" style={{padding: '1.2rem 2.5rem', fontSize: '1.1rem'}}>Start free — 3 builds on us</Link>
          </div>

          {/* Premium Glass Phone Mockup */}
          <div className="glass-phone-container">
            <div className="glass-phone">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="phone-avatar"></div>
                  <div className="phone-lines">
                     <div className="phone-line" style={{width: '60%'}}></div>
                     <div className="phone-line" style={{width: '40%'}}></div>
                  </div>
                </div>
                <div className="phone-hero-img"></div>
                
                <div className="phone-app-mock">
                    <div className="phone-lines" style={{margin: '0 0 1rem 0'}}>
                      <div className="phone-line" style={{width: '100%'}}></div>
                      <div className="phone-line" style={{width: '90%'}}></div>
                      <div className="phone-line" style={{width: '80%'}}></div>
                    </div>
                    <div style={{display: 'flex', gap: '10px', marginTop: '1rem'}}>
                      <div style={{flex: 1, height: '80px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)'}}></div>
                      <div style={{flex: 1, height: '80px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)'}}></div>
                    </div>
                    <div className="phone-btn"><div className="phone-line" style={{width: '30%', background: '#000', height: '6px', borderRadius: '3px'}}></div></div>
                </div>
              </div>
            </div>
            
            <div className="floating-badge badge-left">
               <div style={{width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e'}}></div>
               <span style={{fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: '#fff'}}>EAS Cloud Build Active</span>
            </div>
            
            <div className="floating-badge badge-right">
               <span style={{fontSize: '1.5rem'}}>📱</span>
               <div>
                  <div style={{fontWeight: 600, fontSize: '0.9rem', color: '#fff'}}>APK Ready</div>
                  <div style={{color: '#888', fontSize: '0.8rem'}}>14.2 MB</div>
               </div>
            </div>
          </div>
        </div>

        {/* 3 Input Methods */}
        <section className="section container">
          <div className="section-header">
            <h2 className="section-title">Three input methods.</h2>
            <p className="section-subtitle">Choose the flow that completely bypasses Android Studio.</p>
          </div>
          <div className="bento-grid">
            <div className="bento-card">
              <div className="bento-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3 className="bento-title">Paste your React Native code</h3>
              <p className="bento-text">Copy and paste directly from any AI IDE. We detect the framework, resolve dependencies, and build it natively.</p>
            </div>
            <div className="bento-card">
              <div className="bento-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <h3 className="bento-title">Upload a UI Design</h3>
              <p className="bento-text">Drop any app screenshot. Claude writes the front-end code, and our EAS infrastructure builds the app.</p>
            </div>
            <div className="bento-card">
              <div className="bento-icon">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <h3 className="bento-title">Describe with Prompt</h3>
              <p className="bento-text">Describe your app in plain English. We handle the entire engineering pipeline and output an installable file.</p>
            </div>
          </div>
        </section>

        {/* Social Proof & Logos */}
        <section className="section container" style={{ textAlign: 'center' }}>
           <h2 className="section-title" style={{fontSize: '2rem'}}>Seamless output from any AI platform</h2>
           <div style={{display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', opacity: 0.8, marginTop: '4rem', filter: 'grayscale(100%) blur(0.5px)'}}>
             <span style={{fontSize: '1.8rem', fontWeight: 700}}>Emergent</span>
             <span style={{fontSize: '1.8rem', fontWeight: 700}}>Lovable</span>
             <span style={{fontSize: '1.8rem', fontWeight: 700}}>Bolt.new</span>
             <span style={{fontSize: '1.8rem', fontWeight: 700}}>v0</span>
             <span style={{fontSize: '1.8rem', fontWeight: 700}}>Cursor</span>
           </div>
        </section>

        {/* Pricing */}
        <section className="section container">
          <div className="section-header">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">No tricks. Cancel anytime.</p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 className="bento-title" style={{fontSize: '1.5rem', color: '#ccc'}}>Free</h3>
              <div className="price-tag">$0</div>
              <ul className="pricing-list">
                <li>3 APK Builds total</li>
                <li style={{ color: "#aaa" }}>Watermarked browser preview</li>
              </ul>
              <Link href="/app" className="btn btn-secondary" style={{ width: "100%", padding: '1rem' }}>Get Started</Link>
            </div>
            <div className="pricing-card popular" style={{position: 'relative'}}>
              <div style={{ position: 'absolute', top: '25px', right: '25px', fontSize: '0.7rem', background: '#fff', color: '#000', padding: '4px 10px', borderRadius: '100px', fontWeight: 700 }}>MOST POPULAR</div>
              <h3 className="bento-title" style={{fontSize: '1.5rem'}}>Starter</h3>
              <div className="price-tag">$19<span style={{ fontSize: '1rem', color: '#888', fontWeight: 400 }}>/mo</span></div>
              <ul className="pricing-list" style={{color: '#fff'}}>
                <li style={{ color: "#fff" }}>10 APK Builds / month</li>
                <li style={{ color: "#fff" }}>Clean shareable link</li>
                <li style={{ color: "#fff" }}>Import from any platform</li>
                <li style={{ color: "#fff" }}>ZIP Source download</li>
              </ul>
              <Link href="/app" className="btn btn-primary" style={{ width: "100%", padding: '1rem' }}>Upgrade</Link>
            </div>
            <div className="pricing-card">
              <h3 className="bento-title" style={{fontSize: '1.5rem', color: '#ccc'}}>Pro</h3>
              <div className="price-tag">$49<span style={{ fontSize: '1rem', color: '#888', fontWeight: 400 }}>/mo</span></div>
              <ul className="pricing-list">
                <li>Unlimited APK Builds</li>
                <li>Play Store Submission</li>
                <li>Priority build queue</li>
                <li>Custom App Icon</li>
              </ul>
              <Link href="/contact" className="btn btn-secondary" style={{ width: "100%", padding: '1rem' }}>Contact Sales</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{marginTop: '4rem', padding: '6rem 0 2rem', borderTop: '1px solid var(--border-color)', background: '#050505'}}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4rem', textAlign: 'left' }}>
            <div style={{gridColumn: 'span 4', sm: {gridColumn: 'span 1'}}}>
              <div className="navbar-logo" style={{color: '#fff', marginBottom: '1.5rem', display: 'flex'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FFF"/>
                  <path d="M2 17l10 5 10-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12l10 5 10-5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Shipkraft
              </div>
              <p style={{color: '#888', maxWidth: '250px', lineHeight: 1.6}}>The only infrastructure platform for bringing AI-generated mobile apps to life instantly.</p>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <h4 style={{color: '#fff', marginBottom: '0.8rem', fontWeight: 600}}>Product</h4>
              <Link href="/pricing" style={{color: '#888', transition: 'color 0.2s'}} className="hover:text-white">Pricing</Link>
              <Link href="/how-it-works" style={{color: '#888', transition: 'color 0.2s'}}>How it Works</Link>
              <Link href="/app" style={{color: '#888', transition: 'color 0.2s'}}>Dashboard Console</Link>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <h4 style={{color: '#fff', marginBottom: '0.8rem', fontWeight: 600}}>Resources</h4>
              <Link href="/guides/emergent-apk" style={{color: '#888', transition: 'color 0.2s'}}>Emergent to APK Guide</Link>
              <Link href="/guides/lovable-mobile-app" style={{color: '#888', transition: 'color 0.2s'}}>Lovable Mobile Guide</Link>
              <Link href="/alternatives/rork" style={{color: '#888', transition: 'color 0.2s'}}>Rork Alternative</Link>
              <Link href="/alternatives/natively" style={{color: '#888', transition: 'color 0.2s'}}>Natively Alternative</Link>
            </div>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <h4 style={{color: '#fff', marginBottom: '0.8rem', fontWeight: 600}}>Legal</h4>
              <Link href="/faq" style={{color: '#888', transition: 'color 0.2s'}}>FAQ</Link>
              <Link href="/privacy" style={{color: '#888', transition: 'color 0.2s'}}>Privacy Policy</Link>
              <Link href="/terms" style={{color: '#888', transition: 'color 0.2s'}}>Terms of Service</Link>
              <Link href="/contact" style={{color: '#888', transition: 'color 0.2s'}}>Contact Support</Link>
            </div>
          </div>
          
          <div className="container" style={{marginTop: '6rem', display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '0.9rem', fontFamily: 'var(--font-mono)'}}>
            <span>&copy; {new Date().getFullYear()} Shipkraft Inc.</span>
            <span style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
               <div style={{width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%'}}></div>
               ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
