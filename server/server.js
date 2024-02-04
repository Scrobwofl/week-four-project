import("dotenv/config");
import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("database.db");

const CLIENT_ORIGIN = process.env.API_URL;
const PORT = process.env.PORT || 6060;

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN || "http://localhost:6060",
};
app.use(cors(corsOptions));

app.use(express.json());

// Root route
app.listen(PORT, () => {
  console.log(`The server is online on port ${PORT}.`);
});

// Get request
app.get("/", (req, res) => {
  try {
    console.log(req);
    let posts = db.prepare(`SELECT * FROM posts`).all();
    res.status(200).json(posts);
  } catch (err) {
    console.log("Error :", err);
    res.status(500).json(err);
  }
});

// Post Request
app.post("/", (req, res) => {
  try {
    const username = req.body.username;
    const message = req.body.message;
    let newPost = db
      .prepare(`INSERT INTO posts (username, message) VALUES (? , ?)`)
      .run(username, message);
    res.status(200).json(newPost);
  } catch (err) {
    console.log(`Error: ${err}`);
    res.status(500).json(err);
  }
});

// Delete?a
