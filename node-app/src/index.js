const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Serve static files

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.post('/add', (req, res) => {
    const { a, b } = req.body;
    if (typeof a !== 'number' || typeof b !== 'number') {
        return res.status(400).json({ error: 'Invalid input' });
    }
    res.json({ result: a + b });
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app; // For testing
