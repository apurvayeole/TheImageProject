const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'albums.sqlite');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS albums (
    id INTEGER PRIMARY KEY,
    title TEXT,
    location TEXT,
    year TEXT,
    description TEXT,
    coverImage TEXT,
    images TEXT,
    camera TEXT
  )
`);

module.exports = db;