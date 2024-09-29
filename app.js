const express = require('express');
const app = express();

// GET /hello - returns "Hello Express JS"
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
});

// GET /user - returns firstname and lastname from query parameters, with defaults
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Pritesh';
    const lastname = req.query.lastname || 'Patel';
    res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname - returns firstname and lastname from path parameters
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
});

// Server listens on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
