const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const express = require('express');
const app = express();

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'bsu';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

app.get('/', (req, res) => {
  res.send('Hello from App Engine!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
