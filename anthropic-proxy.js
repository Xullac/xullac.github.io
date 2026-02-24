const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: [
        'https://xullac.github.io',
        'http://localhost:5173',
        'http://localhost:3000',
    ]
}));
app.use(express.json());

app.post('/api/anthropic', async (req, res) => {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.ANTHROPIC_API_KEY,
                'anthropic-version': '2023-06-01',
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

app.listen(3001, () => console.log('https://xullac-github-io.onrender.com/api/anthropic'));
