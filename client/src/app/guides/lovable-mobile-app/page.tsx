import Link from "next/link";
import "./../../globals.css";

export default function LovableMobileApp() {
  return (
    <>
      <main className="container section" style={{maxWidth: '800px'}}>
         <nav style={{marginBottom: '4rem'}}>
           <Link href="/" className="btn btn-secondary">&larr; Shipkraft Home</Link>
         </nav>
         
         <h1 className="hero-title" style={{fontSize: '3rem'}}>How to turn your Lovable app into a mobile app</h1>
         
         <div style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem'}}>
            <p style={{marginBottom: '1.5rem'}}>Lovable is an incredible rapid prototyping tool that generates production-ready code. However, taking the Lovable web app and transforming it into a native, installable Android APK can feel intimidating for non-technical founders.</p>
            <p style={{marginBottom: '1.5rem'}}>If you ask how to do this in the Discord, developers will tell you to install Node, configure Expo CLI, and build locally with Android Studio. This takes hours to set up.</p>

            <h3 style={{color: '#fff', fontSize: '1.5rem', margin: '3rem 0 1rem'}}>The Fastest Way (10 Minutes)</h3>
            <p style={{marginBottom: '1.5rem'}}>With Shipkraft, the entire mobile compilation pipeline is automated in the cloud.</p>
            <ol style={{paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
              <li>In Lovable, click export to get your repository.</li>
              <li>Paste the code or drag the ZIP into the Shipkraft Input Terminal.</li>
              <li>Click <strong>Build APK</strong>.</li>
              <li>Within 10 minutes, your Android file will be ready to download and install on any phone.</li>
            </ol>

            <div style={{padding: '2rem', background: '#111', border: '1px solid #333', borderRadius: '12px', marginTop: '4rem', textAlign: 'center'}}>
               <h4 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.2rem'}}>Turn Lovable into an APK right now.</h4>
               <Link href="/app" className="btn btn-primary" style={{padding: '1rem 2rem'}}>Start Building Free</Link>
            </div>
         </div>
      </main>
    </>
  );
}
