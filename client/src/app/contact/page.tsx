import Link from "next/link";
import "./../globals.css";

export default function Contact() {
  return (
    <>
      <div className="bg-grid"></div>
      <div className="bg-spotlight"></div>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center'}}>
        <nav style={{marginBottom: '6rem', textAlign: 'left'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        
        <div style={{maxWidth: '600px', margin: '0 auto'}}>
          <h1 className="hero-title" style={{fontSize: '3.5rem'}}>Contact Support</h1>
          <p className="hero-subtitle">
            No ticket numbers. No chatbots. Just you and me. I respond to every email personally — usually within a few hours.
          </p>
          
          <div style={{marginTop: '4rem', padding: '4rem 2rem', border: '1px solid #333', borderRadius: '16px', background: 'rgba(20,20,20,0.5)', backdropFilter: 'blur(10px)'}}>
             <p style={{color: '#888', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem'}}>EMAIL DIRECTLY AT</p>
             <a href="mailto:founder@shipkraft.com" className="gradient-text" style={{fontSize: '2rem', fontWeight: 600}}>founder@shipkraft.com</a>
          </div>

          <p style={{marginTop: '3rem', color: '#888'}}>
            Rather send a DM?<br/><br/>
            <a href="https://twitter.com/shipkraft" target="_blank" style={{color: '#fff', textDecoration: 'underline'}}>Message me on Twitter (X)</a>
          </p>
        </div>
      </main>
    </>
  );
}
