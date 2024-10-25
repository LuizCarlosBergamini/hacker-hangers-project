const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

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
                    'Authorization': 'Bearer 5rzar28b23txaasgwa4v95h1auzsaz',
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