import Link from "next/link";
import "./../globals.css";

export default function HowItWorks() {
  return (
    <>
      <div className="bg-grid"></div>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem'}}>
        <nav style={{marginBottom: '4rem'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        
        <div className="section-header" style={{maxWidth: '700px', margin: '0 auto 6rem'}}>
          <h1 className="hero-title">How It Works</h1>
          <p className="section-subtitle">Visual step-by-step for non-technical founders who need to see the full flow before trusting us with their app.</p>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '4rem', maxWidth: '800px', margin: '0 auto'}}>
          <div className="bento-card" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
             <div style={{fontSize: '4rem', fontWeight: 800, color: '#333'}}>1</div>
             <div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>Choose your input</h3>
               <p style={{color: '#888'}}>Start with code, an image screenshot, or plain english prompt.</p>
             </div>
          </div>
          
          <div className="bento-card" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
             <div style={{fontSize: '4rem', fontWeight: 800, color: '#333'}}>2</div>
             <div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>Preview in browser</h3>
               <p style={{color: '#888'}}>Interact with the functional Appetize emulator in the browser before commuting to a build.</p>
             </div>
          </div>

          <div className="bento-card" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
             <div style={{fontSize: '4rem', fontWeight: 800, color: '#333'}}>3</div>
             <div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>Click Build APK</h3>
               <p style={{color: '#888'}}>Our automated EAS cloud build runs in 8–12 minutes with a live progress bar.</p>
             </div>
          </div>

          <div className="bento-card" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
             <div style={{fontSize: '4rem', fontWeight: 800, color: '#333'}}>4</div>
             <div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>Download APK</h3>
               <p style={{color: '#888'}}>Install the real Android native file onto any Android phone instantly.</p>
             </div>
          </div>

          <div className="bento-card" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
             <div style={{fontSize: '4rem', fontWeight: 800, color: '#333'}}>5</div>
             <div>
               <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', color: '#fff'}}>Share preview link</h3>
               <p style={{color: '#888'}}>Tweet or share the Appetize URL so anyone can try it directly in their web browser without downloading the APK.</p>
             </div>
          </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '6rem'}}>
          <Link href="/app" className="btn btn-primary" style={{padding: '1rem 3rem'}}>Ready to build? Start Free</Link>
        </div>
      </main>
    </>
  );
}
