import Link from "next/link";
import "./../../globals.css";

export default function PreviewScreen() {
  return (
    <div style={{display: 'flex', gap: '2rem', height: '100vh', padding: '2rem', background: '#000'}}>
      <nav style={{position: 'absolute', top: '10px', left: '20px'}}>
        <Link href="/app" className="btn btn-secondary" style={{padding: '0.4rem 1rem', fontSize: '0.8rem'}}>&larr; Back to Input</Link>
      </nav>

      {/* Left Panel: Appetize */}
      <div style={{flex: 1, border: '1px solid #333', borderRadius: '12px', background: '#0c0c0c', display: 'flex', flexDirection: 'column', marginTop: '2rem'}}>
        <div style={{padding: '1rem', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
           <span style={{color: '#fff', fontWeight: 600}}>Appetize.io Live Emulator</span>
           <div style={{padding: '0.3rem 0.8rem', background: '#222', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid #444', color: '#a1a1aa'}}>Device: Pixel 7</div>
        </div>
        <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontFamily: 'var(--font-mono)'}}>
           [ Interactive Android Phone iframe loads here ]
        </div>
      </div>
      
      {/* Right Panel: Code & Actions */}
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem'}}>
         <div style={{flex: 1, border: '1px solid #333', borderRadius: '12px', background: '#0a0a0a', padding: '1rem'}}>
           <h3 style={{color: '#fff', marginBottom: '1rem', fontSize: '1rem'}}>Generated React Native Code (Editable)</h3>
           <textarea 
              style={{width: '100%', height: '85%', background: 'transparent', border: 'none', color: '#a1a1aa', fontFamily: 'var(--font-mono)', resize: 'none', outline: 'none'}}
              defaultValue={`import { View, Text, StyleSheet } from 'react-native';\n\nexport default function App() {\n  return (\n    <View style={styles.container}>\n      <Text style={styles.text}>Shipkraft Generated App</Text>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center',\n    alignItems: 'center',\n    backgroundColor: '#fff',\n  },\n  text: {\n    fontSize: 20,\n    fontWeight: 'bold',\n  }\n});`}
           ></textarea>
         </div>

         <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
           <button className="btn btn-secondary" style={{width: '100%', justifyContent: 'center'}}>✨ Refine with AI</button>
           <button className="btn btn-secondary" style={{width: '100%', justifyContent: 'center'}}>🔗 Copy Public Shareable Preview</button>
           <Link href="/app/building" className="btn btn-primary" style={{width: '100%', padding: '1.2rem', fontSize: '1.1rem'}}>🔨 Trigger EAS Build APK</Link>
         </div>
      </div>
    </div>
  );
}
