const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

async function getAccessToken() {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
        },
        params: {
            grant_type: 'client_credentials'
        }
    });
    return response.data.access_token;
}

app.get('/api/search', async (req, res) => {
    const query = req.query.q;
    const accessToken = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        },
        params: {
            q: query,
            type: 'track'
        }
    });
    res.json(response.data.tracks.items);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
