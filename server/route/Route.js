const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
