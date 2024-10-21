const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/game_time_to_beats', async (req, res) => {
    try {
        const response = await axios.post(
            'https://api.igdb.com/v4/game_time_to_beats',
            req.body,
            {
                headers: {
                    'Accept': 'application/json',
                    'Client-ID': 'flw1jituv6d1gacxg8xhi97kr6nb1k',
                    'Authorization': 'Bearer btm0odt7g8ss86liubs8qez7ie11fi',
                },
            }
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});