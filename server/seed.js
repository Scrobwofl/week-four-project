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

insertStatement.run(
  "Site Dev",
  "Leave a message on the wall for your fellow Tech Educators 008 course mates"
);
