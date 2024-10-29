const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

const CLIENT_ID = "flw1jituv6d1gacxg8xhi97kr6nb1k";
const AUTH = "Bearer 4baa18i9pt95353f68hehsjdltyho7";

app.use(cors());
app.use(express.json());

app.post('/api/companies', async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const fetch = (await import('node-fetch')).default;

        const response = await fetch(
            "https://api.igdb.com/v4/companies",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': CLIENT_ID,
                    'Authorization': AUTH,
                },
                body: req.body.query,
            });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

app.post('/api/events', async (req, res) => {
    try {
        console.log('Request body:', req.body);

        const fetch = (await import('node-fetch')).default;

        const response = await fetch(
            "https://api.igdb.com/v4/events",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': CLIENT_ID,
                    'Authorization': AUTH,
                },
                body: req.body.query,
            });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

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
                    'Client-ID': CLIENT_ID,
                    'Authorization': AUTH,
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

//testing deploy