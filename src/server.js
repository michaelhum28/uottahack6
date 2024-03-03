// import express from "express";
// import { createRequire } from "module";
// import sqlite3 from "sqlite3";
// import { open } from "sqlite";

// const app = express();
// const require = createRequire(import.meta.url);

// // Function to create database connection
// async function createDbConnection(filename) {
//     return open({
//         filename,
//         driver: sqlite3.Database
//     });
// }

// // Route to fetch data from the database
// app.get("/courses", async (request, res) => {
//     try {
//         // Fetch data from the database
//         const db = await createDbConnection('forum.db');
//         const query = "SELECT name, description FROM posts";
//         const rows = await db.all(query);
//         await db.close();

//         // Send the fetched data as a response
//         res.json(rows);
//     } catch (error) {
//         res.status(500).json({ error: "Error fetching data from the database" });
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 4040;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
