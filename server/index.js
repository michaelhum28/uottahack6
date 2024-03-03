import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';



const app = express()

const db = new Database('coinflip.db')
db.exec(`CREATE TABLE IF NOT EXISTS "lb"(
	"id" INTEGER PRIMARY KEY AUTOINCREMENT,
	"name" TEXT NOT NULL,
	"streak" INTEGER
); `);

app.use(cors({ origin: true }));
app.use(express.json())
app.listen(4040)

app.get("/leaderboard", (request, res) => { 
    res.json(select.all())
})

const insert = db.prepare('INSERT INTO lb (name, streak) VALUES (?,?)');
const select = db.prepare('SELECT * FROM lb ORDER BY streak DESC LIMIT 10')

app.post("/streak", (request, res) => {
		try {
			insert.run(request.body.name, request.body.streak)
			res.json({status: "success"});
		} catch (error) {
			res.json({status : "error"});
		}
    	
});

insert.run("bob",10)