import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'dev.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS User (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE,
    tier TEXT DEFAULT 'FREE',
    credits INTEGER DEFAULT 3,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Project (
    id TEXT PRIMARY KEY,
    userId TEXT,
    name TEXT DEFAULT 'Untitled App',
    framework TEXT DEFAULT 'react-native',
    sourceCode TEXT,
    aiModel TEXT DEFAULT 'claude-3.5-sonnet',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(userId) REFERENCES User(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS Build (
    id TEXT PRIMARY KEY,
    projectId TEXT,
    status TEXT DEFAULT 'QUEUED',
    apkUrl TEXT,
    appetizeUrl TEXT,
    logs TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(projectId) REFERENCES Project(id) ON DELETE CASCADE
  );
`);

export default db;
