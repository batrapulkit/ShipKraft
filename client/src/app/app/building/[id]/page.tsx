'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import "./../../../globals.css";

export default function BuildingScreen({ params }: { params: { id: string } }) {
  const [logs, setLogs] = useState<{agent: string, message: string, type: string}[]>([]);
  const [status, setStatus] = useState("Initializing EAS and Agent Pipeline...");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Connect to the EventStream
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    const eventSource = new EventSource(`${apiUrl}/api/stream/${params.id}`);

    eventSource.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLogs((prev) => [...prev, data]);
      setStatus(data.message);
      
      if (data.type === 'done') {
         setComplete(true);
         eventSource.close();
      }
      if (data.type === 'error') {
         eventSource.close();
      }
    };

    return () => {
      eventSource.close();
    };
  }, [params.id]);

  return (
    <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000'}}>
      <div style={{maxWidth: '800px', width: '100%', textAlign: 'center'}}>
        
        <div style={{marginBottom: '2rem'}}>
          {!complete && <div style={{width: '60px', height: '60px', border: '4px solid #333', borderTopColor: '#fff', borderRadius: '50%', margin: '0 auto 2rem', animation: 'spin 1s linear infinite'}}></div>}
          <h2 style={{fontSize: '2rem', color: '#fff', marginBottom: '1rem'}}>
            {complete ? "App Compilation Complete" : "Compiling your app..."}
          </h2>
          <p style={{color: '#888', fontFamily: 'var(--font-mono)'}}>
             Project ID: {params.id}
          </p>
        </div>

        {/* Live Terminal Log */}
        <div style={{width: '100%', height: '300px', background: '#0a0a0a', borderRadius: '12px', border: '1px solid #333', overflowY: 'auto', marginBottom: '2rem', textAlign: 'left', padding: '1rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem'}}>
           {logs.map((log, i) => (
             <div key={i} style={{marginBottom: '0.5rem', color: log.type === 'error' ? '#ff5252' : log.type === 'done' ? '#69f0ae' : '#aaa'}}>
                <span style={{color: '#fff', fontWeight: 'bold'}}>[{log.agent}]</span> {log.message}
             </div>
           ))}
           {logs.length === 0 && <span style={{color: '#555'}}>Awaiting agent signals...</span>}
        </div>

        <p style={{color: complete ? '#69f0ae' : '#fff', fontSize: '0.95rem', marginBottom: '2rem'}}>STATUS: {status}</p>

        {/* Actions */}
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
           {complete ? (
             <Link href="/app/done" className="btn btn-primary" style={{background: '#fff', color: '#000', padding: '0.75rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'}}>
                View Artifacts
             </Link>
           ) : (
             <button disabled className="btn btn-secondary" style={{opacity: 0.5, padding: '0.75rem 2rem', borderRadius: '8px'}}>
                Please wait...
             </button>
           )}
        </div>
        
        {/* CSS for spinner */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        `}} />
      </div>
    </div>
  );
}
