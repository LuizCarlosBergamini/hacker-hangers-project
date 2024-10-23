const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/search', async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const fetch = (await import('node-fetch')).default;

        const response = await fetch(
            "https://api.igdb.com/v4/search",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': 'flw1jituv6d1gacxg8xhi97kr6nb1k',
                    'Authorization': 'Bearer btm0odt7g8ss86liubs8qez7ie11fi',
                },
                body: req.body.query,
            });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/games', async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const fetch = (await import('node-fetch')).default;

        const response = await fetch(
            "https://api.igdb.com/v4/games",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': 'flw1jituv6d1gacxg8xhi97kr6nb1k',
                    'Authorization': 'Bearer btm0odt7g8ss86liubs8qez7ie11fi',
                },
                body: req.body.query,
            });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});