// server.js
import express from 'express';
import { connectToDatabase } from './path-to-connectToDatabase';
import Item from './path-to-itemModel'; // Import the MongoDB model

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Parse incoming JSON requests

// Example endpoint to add an item to the database
app.post('/api/items', async (req, res) => {
    try {
        // Connect to the database
        await connectToDatabase();

        // Create a new item based on the request body
        const newItem = new Item(req.body);

        // Save the new item to the database
        const savedItem = await newItem.save();

        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error adding item:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
