import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db: any = null;

export async function openDb() {
  if (!db) {
    db = await open({
      filename: './mydb.sqlite',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS interactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        input TEXT NOT NULL,
        output TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}