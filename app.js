const express = require('express');

const app = express();

app.get('/live', (req, res) => {
  res.json({ message: 'We are live' });
});

module.exports = { app };
