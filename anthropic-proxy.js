const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(cors({origin: 'http://localhost:3000'})); // Vite default; change to 3000 if using CRA
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

app.listen(3001, () => console.log('Anthropic proxy running on http://localhost:3001'));