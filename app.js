const { MongoClient } = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Connection URI
const uri = 'mongodb://localhost:27017/'; // Replace with your MongoDB connection string

// Database Name
const dbName = 'devarshitambulkar2'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to the MongoDB server
client.connect((err) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    console.log('Connected to MongoDB');

    // Access a specific database
    const database = client.db(dbName);

    // Access a specific collection
    const collection = database.collection('your_collection_name'); // Replace with your collection name

    // Express route to handle form submissions
    app.post('/submit-form', (req, res) => {
        // Extract form data from the request body
        const formData = req.body;

        // Insert form data into the collection
        collection.insertOne(formData, (err, result) => {
            if (err) {
                console.error('Error inserting document:', err);
                res.status(500).send('Error submitting form');
                return;
            }

            console.log('Document inserted:', result.ops[0]);
            res.status(200).send('Form submitted successfully');
        });
    });

    // Express route to retrieve form data
    app.get('/get-form-data', (req, res) => {
        // Retrieve form data from the collection
        collection.find({}).toArray((err, documents) => {
            if (err) {
                console.error('Error retrieving documents:', err);
                res.status(500).send('Error retrieving form data');
                return;
            }

            res.status(200).json(documents);
        });
    });

    // Start the Express server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

// Close the MongoDB connection on process termination
process.on('SIGINT', () => {
    client.close();
    process.exit(0);
});
