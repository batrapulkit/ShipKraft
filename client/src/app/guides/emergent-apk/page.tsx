import Link from "next/link";
import "./../../globals.css";

export default function EmergentToAPK() {
  return (
    <>
      <main className="container section" style={{maxWidth: '800px'}}>
         <nav style={{marginBottom: '4rem'}}>
           <Link href="/" className="btn btn-secondary">&larr; Shipkraft Home</Link>
         </nav>
         
         <h1 className="hero-title" style={{fontSize: '3rem'}}>How to turn your Emergent.sh app into a real Android APK</h1>
         
         <div style={{color: '#aaa', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem'}}>
            <p style={{marginBottom: '1.5rem'}}>Emergent AI is incredible for vibe-coding web applications, but porting those applications to a native mobile environment can be incredibly frustrating. While Emergent outputs a Capacitor wrapper, you still only get an Expo Go QR code. If you want to distribute your app or install it natively, you need an APK.</p>

            <h3 style={{color: '#fff', fontSize: '1.5rem', margin: '3rem 0 1rem'}}>The manual way (EAS + Android Studio)</h3>
            <p style={{marginBottom: '1.5rem'}}>To manually generate your APK from Emergent's export, you need to navigate to the Terminal, install Expo CLI, set up an EAS account, and configure a local build environment. You will also need to manually handle Java dependencies, Gradle versions, and Android Studio SDKs. This process typically takes 2–4 hours of debugging for non-mobile developers.</p>

            <h3 style={{color: '#fff', fontSize: '1.5rem', margin: '3rem 0 1rem'}}>The Shipkraft method (1 Click)</h3>
            <p style={{marginBottom: '1.5rem'}}>Shipkraft bypasses the entire terminal workflow. Simply export your ZIP from Emergent, drag it into Shipkraft, and we automatically provision the EAS infrastructure in the cloud.</p>
            
            <div style={{padding: '2rem', background: '#111', border: '1px solid #333', borderRadius: '12px', marginTop: '2rem', textAlign: 'center'}}>
               <h4 style={{color: '#fff', marginBottom: '1rem', fontSize: '1.2rem'}}>Skip the terminal entirely.</h4>
               <Link href="/app" className="btn btn-primary" style={{padding: '1rem 2rem'}}>Convert Emergent App to APK for Free</Link>
            </div>
         </div>
      </main>
    </>
  );
}
