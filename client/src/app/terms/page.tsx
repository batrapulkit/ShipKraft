import Link from "next/link";
import "./../globals.css";

export default function TermsOfService() {
  return (
    <>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem', maxWidth: '800px'}}>
        <nav style={{marginBottom: '4rem'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        <h1 className="hero-title" style={{fontSize: '3rem'}}>Terms of Service</h1>
        <p className="section-subtitle">Last updated: {new Date().toLocaleDateString()}</p>

        <div style={{marginTop: '4rem', color: '#ccc', lineHeight: '1.8'}}>
           <h3 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem'}}>1. Service Usage Placeholder</h3>
           <p style={{marginBottom: '2rem'}}>This Terms of Service is intentionally left blank as a placeholder. Prior to accepting payments or entering production, this document must be generated to legally protect from liability regarding user-generated code.</p>

           <h3 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.5rem'}}>2. Restrictions</h3>
           <p style={{marginBottom: '2rem'}}>Users must not use the Shipkraft build infrastructure to compile malware, illegal applications, or bypass EAS terms of service.</p>
        </div>
      </main>
    </>
  );
}
