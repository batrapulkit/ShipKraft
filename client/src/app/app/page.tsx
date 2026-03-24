import { cookies } from 'next/headers';
import db from '../../db';
import { logoutAction } from '../actions';
import { redirect } from 'next/navigation';
import PromptForm from '../components/PromptForm';
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  const { userId } = await auth();
  
  if (!userId) {
     redirect('/sign-in');
  }

  let userRecord = db.prepare('SELECT * FROM User WHERE id = ?').get(userId) as any;
  if (!userRecord) {
     const clerkUser = await currentUser();
     let email = clerkUser?.emailAddresses[0]?.emailAddress || `user_${userId.slice(-5)}@shipkraft.com`;
     
     // Prevent SQLite UNIQUE constraint crashes if the user's email was already used in the legacy MVP mock-auth
     const isEmailTaken = db.prepare('SELECT id FROM User WHERE email = ?').get(email);
     if (isEmailTaken) {
         email = `clerk_${userId.slice(-6)}_` + email;
     }

     const now = new Date().toISOString();
     db.prepare('INSERT INTO User (id, email, credits, tier, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?)').run(userId, email, 3, 'FREE', now, now);
     userRecord = { id: userId, email, credits: 3, tier: 'FREE', createdAt: now, updatedAt: now };
  }
  
  const userProjects = db.prepare('SELECT * FROM Project WHERE userId = ? ORDER BY createdAt DESC').all(userId) as any[];

  const user = { ...userRecord, projects: userProjects };

  async function createProject(formData: FormData) {
    'use server';
    const prompt = formData.get('prompt') as string;
    if (!prompt || !user) return;
    
    // Auto-generate a slug name based on the first few words
    const generatedName = prompt.split(' ').slice(0, 3).join('-').toLowerCase() || 'untitled-app';
    const aiModel = formData.get('aiModel') as string || 'claude-3.5-sonnet';
    const modules = formData.get('modules') as string || '';
    const inferenceMode = formData.get('inferenceMode') as string || 'text';
    const imageBase64 = formData.get('imageBase64') as string || '';
    
    const fullPrompt = modules ? `${prompt}\n\nRequired Native Modules: ${modules}` : prompt;
    
    const now = new Date().toISOString();
    const projectId = 'prj_' + Date.now().toString();
    
    db.prepare(`
      INSERT INTO Project (id, userId, name, framework, sourceCode, aiModel, createdAt, updatedAt) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(projectId, user.id, generatedName, 'react-native', fullPrompt, aiModel, now, now);

    // Trigger the actual generation backend using dynamic ENV config
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001';
      await fetch(`${apiUrl}/api/start-build`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: fullPrompt, aiModel, projectId, modules, inferenceMode, imageBase64 })
      });
    } catch (e) {
      console.error("Failed to trigger build server", e);
    }

    redirect('/app/building/' + projectId);
  }

  return (
    <>
      <div className="app-container">
        {/* Top Navbar */}
        <header className="topbar">
          <div className="topbar-left">
            <button className="nav-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              Home
            </button>
          </div>
          <div className="topbar-right">
            <button className="credits-pill">{user?.credits} Credits</button>
            <form action={logoutAction} style={{display: 'inline'}}>
              <button className="icon-btn" title="Logout" type="submit">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
              </button>
            </form>
            <div className="avatar" title={user?.email}>{user?.email?.[0].toUpperCase()}</div>
          </div>
        </header>

        <main className="main-content">
          {/* Special Offer Banner */}
          <div className="special-offer">
            <div className="offer-text">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{color: '#d32f2f'}}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              <span><strong>Welcome {user?.email}!</strong> Complete your profile to unlock Pro.</span>
            </div>
            <button className="offer-btn">Complete Profile →</button>
          </div>

          <div className="app-header">
            <h1 className="app-title">Where apps become reality</h1>
            <p className="app-subtitle">Build fully functional APKs and Emulators through a simple prompt.</p>
          </div>

          {/* Prompt / Input Box Component forms to our Server Action */}
          <PromptForm createProject={createProject} userTier={user?.tier} userId={user?.id} />

          {/* Bottom Table Section */}
          <div className="table-section" style={{marginTop: '4rem'}}>
            <div className="table-header">
              <div className="table-tabs">
                <button className="table-tab active">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                  My Saved Apps
                </button>
              </div>
            </div>

            <table className="data-table">
              <thead>
                <tr>
                  <th>APP ID</th>
                  <th>APP DETAILS</th>
                  <th>GENERATION MODEL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user?.projects?.length === 0 && (
                   <tr>
                     <td colSpan={4} style={{textAlign: 'center', padding: '3rem 0', color: '#666'}}>
                        You haven't built any apps yet. Paste your prompt above!
                     </td>
                   </tr>
                )}
                {user?.projects?.map((project: any) => (
                  <tr key={project.id}>
                    <td className="td-id">APP - {project.id.slice(0, 6).toUpperCase()}</td>
                    <td className="td-task">
                      {project.name}
                      <span>{project.framework}</span>
                    </td>
                    <td className="td-date" style={{textTransform: 'capitalize'}}>{project.aiModel.replace('-', ' ')}</td>
                    <td style={{textAlign: 'right', color: '#666'}}>•••</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </main>
      </div>
    </>
  );
}
