'use server';

import db from '../db';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  
  if (!email || !email.includes('@')) {
    redirect('/sign-in?error=invalid_email');
  }

  // Magic Login / Signup
  let user = db.prepare('SELECT * FROM User WHERE email = ?').get(email) as any;
  if (!user) {
    const id = 'usr_' + Date.now().toString();
    const now = new Date().toISOString();
    db.prepare('INSERT INTO User (id, email, createdAt, updatedAt) VALUES (?, ?, ?, ?)').run(id, email, now, now);
    user = { id, email };
  }

  cookies().set('currentUser', user.id, { 
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    path: '/' 
  });
  
  redirect('/app');
}

export async function logoutAction() {
  cookies().delete('currentUser');
  redirect('/');
}

export async function upgradeUserAction(userId: string) {
  db.prepare('UPDATE User SET tier = ? WHERE id = ?').run('PRO', userId);
  return { success: true };
}
