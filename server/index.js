import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';



const app = express()

const db = new Database('forum.db')
db.exec(`CREATE TABLE IF NOT EXISTS "forum"(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"name" TEXT NOT NULL,
	"streak" INTEGER
); `);

app.use(cors({ origin: true }));
app.use(express.json())
app.listen(5173)

app.get("/forum", (request, res) => { 
    res.json(select.all())
})

const insert = db.prepare('INSERT INTO forum (title, description, image) VALUES (?,?, ?)');
const select = db.prepare('SELECT * FROM lb ORDER BY streak DESC LIMIT 10')

app.post("/streak", (request, res) => {
		try {
			insert.run(request.body.name, request.body.streak)
			res.json({status: "success"});
		} catch (error) {
			res.json({status : "error"});
		}
    	
});