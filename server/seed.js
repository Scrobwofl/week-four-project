import Database from "better-sqlite3";
const db = new Database("database.db");

// id INTEGER PRIMARY KEY AUTOINCREMENT

// Main db template setup
db.exec(`CREATE TABLE IF NOT EXISTS posts (
   username TEXT,
   message TEXT
   )
`);

const insertStatement = db.prepare(
  `INSERT INTO posts (username, message) VALUES (?,?)`
);

insertStatement.run("Crash Test Mike", "Ouch.");
insertStatement.run("Crash Test Geoff", "I'm in considerable pain.");
insertStatement.run("Crash Test Gary", "This can't be good.");
