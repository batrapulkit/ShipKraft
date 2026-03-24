import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ 
       display: 'flex', 
       justifyContent: 'center', 
       alignItems: 'center', 
       height: '100vh', 
       background: '#0a0a0a',
       flexDirection: 'column',
       gap: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
         <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 800 }}>Join Shipkraft</h1>
         <p style={{ color: '#888' }}>Build native mobile apps with AI.</p>
      </div>
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" forceRedirectUrl="/app" />
    </div>
  );
}
