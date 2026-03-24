import Link from "next/link";
import "./../globals.css";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem', maxWidth: '800px'}}>
        <nav style={{marginBottom: '4rem'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        <h1 className="hero-title" style={{fontSize: '3rem'}}>Privacy Policy</h1>
        <p className="section-subtitle">Last updated: {new Date().toLocaleDateString()}</p>

        <div style={{marginTop: '4rem', color: '#ccc', lineHeight: '1.8'}}>
           <h3 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem'}}>1. Information We Collect</h3>
           <p style={{marginBottom: '2rem'}}>This privacy policy is intentionally left blank as a placeholder. Prior to accepting payments or entering production, this document must be generated via termly.io or privacypolicygenerator.info to cover data collection, Appetize.io handling, Expo Application Services (EAS) build logs, and Stripe payment processing.</p>

           <h3 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem'}}>2. Third-Party Services</h3>
           <p style={{marginBottom: '2rem'}}>Shipkraft relies on the following third-party infrastructure: Expo (EAS) for compiling React Native binaries, Appetize.io for generating browser-based web emulators, Stripe for payment processing, and Vercel/Railway for server hosting.</p>
        </div>
      </main>
    </>
  );
}
