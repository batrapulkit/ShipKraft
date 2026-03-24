import Link from "next/link";
import "./../../globals.css";

export default function RorkAlternative() {
  return (
    <>
      <main className="container section" style={{maxWidth: '800px'}}>
         <nav style={{marginBottom: '4rem'}}>
           <Link href="/" className="btn btn-secondary">&larr; Shipkraft Home</Link>
         </nav>
         
         <h1 className="hero-title" style={{fontSize: '3rem'}}>The Most Reliable Rork Alternative for Building Mobile Apps</h1>
         
         <div style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem'}}>
            <p style={{marginBottom: '1.5rem'}}>Rork.ai gained massive popularity for automating mobile app development, successfully drawing over 743K monthly visitors. However, growing pains have led to frequent build failures, an iOS-first bias that breaks Android builds, and a complete lack of human support, earning it a 3.2/5 on Trustpilot.</p>

            <h3 style={{color: '#fff', fontSize: '1.5rem', margin: '3rem 0 1rem'}}>Why developers are switching from Rork to Shipkraft</h3>
            <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <li><strong>Zero vendor lock-in:</strong> Rork forces you to build and host within their walled garden. Shipkraft acts as a standalone build pipeline. You can import code from Lovable, Cursor, or Emergent and we will build it.</li>
              <li><strong>Personal Support:</strong> Rork relies on automated ticketing. At Shipkraft, the founder responds to every support email directly.</li>
              <li><strong>Shareable Previews:</strong> Rork uses TestFlight and Expo Go. Shipkraft gives you an Appetize.io browser link, meaning anyone can test your app without downloading anything.</li>
            </ul>

            <div style={{padding: '2rem', background: '#111', border: '1px solid #333', borderRadius: '12px', marginTop: '4rem', textAlign: 'center'}}>
               <h4 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.2rem'}}>Your Android build shouldn&apos;t fail silently.</h4>
               <Link href="/app" className="btn btn-primary" style={{padding: '1rem 2rem'}}>Try Shipkraft Free (3 Builds)</Link>
            </div>
         </div>
      </main>
    </>
  );
}
