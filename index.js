const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// DO NOT start the server here (no app.listen())
// Just export the app for testing
module.exports = app;
