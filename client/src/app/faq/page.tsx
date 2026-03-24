import Link from "next/link";
import "./../globals.css";

export default function FAQ() {
  return (
    <>
      <div className="bg-grid"></div>
      <main className="container" style={{paddingTop: '6rem', paddingBottom: '6rem', maxWidth: '800px'}}>
        <nav style={{marginBottom: '4rem'}}>
          <Link href="/" className="btn btn-secondary">&larr; Back to Home</Link>
        </nav>
        
        <h1 className="hero-title">Frequently Asked Questions</h1>
        <p className="section-subtitle" style={{marginBottom: '4rem'}}>Built from real questions our first users asked. Not guessed.</p>

        <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Will it work with my Emergent / Lovable / Bolt app?</h4>
            <p style={{color: '#888'}}>Yes. If it generates React Native or Expo, we can wrap it, build it, and give you an APK.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>How long does the APK build take?</h4>
            <p style={{color: '#888'}}>Builds route to our dedicated EAS instances. Typically, an Android build takes 8–15 minutes depending on queue volume.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Can I publish to the Play Store?</h4>
            <p style={{color: '#888'}}>Yes! The APKs provided are properly signed release builds (if configured on Pro) and can be directly uploaded to your Google Play Console.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>What if my build fails?</h4>
            <p style={{color: '#888'}}>We do not charge build credits for failed builds. You will get the build runtime logs so you or Claude can fix the issue and try again.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Do I need a Google Play developer account?</h4>
            <p style={{color: '#888'}}>Only if you want to publish your app publicly. If you just want to install the APK on your own phone to test, no account is required.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>What is the shareable preview link?</h4>
            <p style={{color: '#888'}}>Every successfully built app receives an Appetize.io iframe emulator link. Anyone who opens the URL can interact with your Android app in their browser, without downloading the APK.</p>
          </div>
          <div className="glass-panel" style={{padding: '2rem'}}>
            <h4 style={{fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff'}}>Can I get an iOS build?</h4>
            <p style={{color: '#888'}}>Currently we strictly output Android APKs and Browser Emulators. iOS requires an active Apple Developer Program membership ($99/yr) and complex certificate provisioning which makes "one click" impossible.</p>
          </div>
        </div>
      </main>
    </>
  );
}
