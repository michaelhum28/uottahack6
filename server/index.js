import express from "express";
import cors from "cors";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// import sqlite3 from "better-sqlite3";
import sqlite3 from "sqlite3";


// const db = require("better-sqlite3");
// const { open } = require('better-sqlite3');


const db = require("sqlite3");
const { open } = require('sqlite');



function createDbConnection(filename) {
    return open({
        filename,
        driver: sqlite3.Database
    });
}

// function createDbConnection(filename) {
// 	return new sqlite3(filename);
// }
const query = "";
const app = express();
app.use(express.json());


const course = [];

app.use(cors({ origin: true }));
app.use(express.json());
app.listen(4040);

// async function parseDb(){
// 	const db = await createDbConnection('forum.db');
// }

function parseJSON(json) {
    const temp = [];
    temp[0] = json['body']['name']
	temp[1] = json['body']['description']
    return temp;
}

// async function uploadPost(name, desc) {
//     const db = createDbConnection('forum.db');
//     try {
//         let query = "SELECT MAX(id) AS max_id FROM posts";
//         let row = await db.prepare(query).get();
//         let id = row.max_id + 1;

//         query = "INSERT INTO posts (id, name, desc, likes) VALUES (?, ?, ?, ?)";
//         const data = [id, name, desc, 0];
//         db.prepare(query).run(data, function(err) {
//             if (err) {
//                 console.error(err.message);
//             }
//             id++;
//         });
//     } catch (error) {
//         console.error("Error uploading post:", error);
//     } finally {
//         await db.close();
//     }
// }

// async function uploadPost(name, desc) {
//     const db = await createDbConnection('forum.db');
//     try {
//         let query = "SELECT MAX(id) AS max_id FROM forum";
//         let row = await db.prepare(query).get();
//         let id = row.max_id + 1;

//         query = "INSERT INTO posts (id, name, desc, likes) VALUES (?, ?, ?, ?)";
//         const data = [id, name, desc, 0];
//         await db.prepare(query).run(data); // Wait for the query execution to finish
//         // id++; No need to increment id here as it's already incremented in the previous line
//     } catch (error) {
//         console.error("Error uploading post:", error);
//     } finally {
//         await db.close(); // Close the database connection
//     }
// }

async function uploadPost(name, description) {
    const db = await createDbConnection('forum.db');
    let stmt = null;
    try {
        let query = "INSERT INTO posts (name, description, likes) VALUES (?, ?, ?)";
        stmt = await db.prepare(query);
        await stmt.run(name, description, 0);
    } catch (error) {
        console.error("Error uploading post:", error);
    } finally {
        if (stmt) {
            await stmt.finalize(); // Finalize the prepared statement
        }
        await db.close(); // Close the database connection
    }
}




app.post("/courses", async (request, res) => {
    try {
        const temp = parseJSON(request); 
        for (let i = 0; i < temp.length; i++) { 
            console.log(temp[i]); 
            // uploadPost(temp[i]);
            await uploadPost(temp[i]);
        }
		uploadPost(temp[0], temp[1]);
        res.json({ status: "success" });
    } catch (error) {
        res.json({ status: "error" });
    }
});


app.get("/courses", (request, res) => {
	try {
		const temp = course[request.params.id];
		res.json(temp);
	} catch (error) {
		res.status(500).json({ error });
	}
});

app.post("/posts", (request, res) => {
	try {
		post.push(course[request.params.id].posts);
		res.json({ status: "success" });
	} catch (error) {
		res.json({ status: "error" });
	}
});

app.get("/posts", (request, res) => {
	try {
		const temp = post[request.params.id];
		res.json(temp);
	} catch (error) {
		res.status(500).json({ error });
	}
});

app.post("/courses", async (request, response) => {
    try {
        const { name, description } = request.body; // Destructure name and description from request body
        await uploadPost(name, description); // Call uploadPost function with name and description
        response.json({ status: "success" });
    } catch (error) {
        console.error("Error handling POST request to /courses:", error);
        response.status(500).json({ status: "error" });
    }
});