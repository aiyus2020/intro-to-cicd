// index.js
const express = require('express');
const app = express();

// Middleware (optional, for JSON parsing if needed)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

exports = app; // Export the app for testing or further configuration

