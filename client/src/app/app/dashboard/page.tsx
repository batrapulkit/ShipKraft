import Link from "next/link";
import "./../../globals.css";

export default function Dashboard() {
  return (
    <>
      <div className="bg-grid"></div>
      <main className="container" style={{paddingTop: '4rem', paddingBottom: '6rem'}}>
        <nav className="navbar" style={{marginBottom: '4rem'}}>
          <div className="navbar-logo">Shipkraft Dashboard</div>
          <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <Link href="/app" className="btn btn-primary" style={{padding: '0.5rem 1rem'}}>+ New Build</Link>
            <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer'}}>U</div>
          </div>
        </nav>

        <div className="section-header" style={{textAlign: 'left', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
          <div>
            <h1 className="hero-title" style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>Build History</h1>
            <p className="section-subtitle">Manage your past projects and preview links.</p>
          </div>
          <div style={{textAlign: 'right'}}>
            <div style={{fontSize: '1.5rem', color: '#fff', fontWeight: 600}}>8 <span style={{color: '#666', fontSize: '1rem', fontWeight: 400}}>/ 10 builds used</span></div>
            <div className="progress-bar" style={{width: '200px', height: '6px', background: '#222', borderRadius: '3px', marginTop: '0.5rem'}}>
              <div style={{width: '80%', height: '100%', background: '#fff', borderRadius: '3px'}}></div>
            </div>
            <Link href="/app/upgrade" style={{color: '#8a8a8a', fontSize: '0.8rem', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block'}}>Upgrade plan</Link>
          </div>
        </div>

        <div className="glass-panel" style={{padding: '0'}}>
          <table className="data-table" style={{width: '100%', borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th style={{padding: '1.5rem', color: '#666', fontSize: '0.8rem', textTransform: 'uppercase'}}>App Name</th>
                <th style={{padding: '1.5rem', color: '#666', fontSize: '0.8rem', textTransform: 'uppercase'}}>Date</th>
                <th style={{padding: '1.5rem', color: '#666', fontSize: '0.8rem', textTransform: 'uppercase'}}>Status</th>
                <th style={{padding: '1.5rem', color: '#666', fontSize: '0.8rem', textTransform: 'uppercase', textAlign: 'right'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr style={{borderTop: '1px solid #222'}}>
                <td style={{padding: '1.5rem', color: '#fff', fontWeight: 500}}>
                  E-Commerce Assistant
                  <div style={{color: '#888', fontSize: '0.8rem', marginTop: '0.2rem', fontFamily: 'var(--font-mono)'}}>SK-9A82B1</div>
                </td>
                <td style={{padding: '1.5rem', color: '#888'}}>Oct 12, 2026</td>
                <td style={{padding: '1.5rem'}}>
                  <span style={{background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)', padding: '4px 8px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600}}>READY</span>
                </td>
                <td style={{padding: '1.5rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end'}}>
                  <button className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>⬇️ APK</button>
                  <button className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>🔗 Preview</button>
                </td>
              </tr>
              {/* Row 2 */}
              <tr style={{borderTop: '1px solid #222'}}>
                <td style={{padding: '1.5rem', color: '#fff', fontWeight: 500}}>
                  Fitness Tracker UI
                  <div style={{color: '#888', fontSize: '0.8rem', marginTop: '0.2rem', fontFamily: 'var(--font-mono)'}}>SK-7C91E3</div>
                </td>
                <td style={{padding: '1.5rem', color: '#888'}}>Oct 10, 2026</td>
                <td style={{padding: '1.5rem'}}>
                  <span style={{background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '4px 8px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600}}>FAILED</span>
                </td>
                <td style={{padding: '1.5rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end'}}>
                  <button className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>View Logs</button>
                </td>
              </tr>
              {/* Row 3 */}
              <tr style={{borderTop: '1px solid #222'}}>
                <td style={{padding: '1.5rem', color: '#fff', fontWeight: 500}}>
                  Habit Builder
                  <div style={{color: '#888', fontSize: '0.8rem', marginTop: '0.2rem', fontFamily: 'var(--font-mono)'}}>SK-4F20D7</div>
                </td>
                <td style={{padding: '1.5rem', color: '#888'}}>Oct 01, 2026</td>
                <td style={{padding: '1.5rem'}}>
                  <span style={{background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)', padding: '4px 8px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600}}>READY</span>
                </td>
                <td style={{padding: '1.5rem', textAlign: 'right', display: 'flex', gap: '0.5rem', justifyContent: 'flex-end'}}>
                  <button className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>⬇️ APK</button>
                  <button className="btn btn-secondary" style={{padding: '0.4rem 0.8rem', fontSize: '0.8rem'}}>🔗 Preview</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>
    </>
  );
}
