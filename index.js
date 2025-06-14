// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware (optional, for JSON parsing if needed)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server is running at http://localhost:${port}`);
});

exports = app; // Export the app for testing or further configuration