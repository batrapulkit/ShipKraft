import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
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
         <h1 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.5rem', fontWeight: 800 }}>Welcome to Shipkraft</h1>
         <p style={{ color: '#888' }}>Enterprise AI App Generation</p>
      </div>
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" forceRedirectUrl="/app" />
    </div>
  );
}
