//----------------------------------------------------------------
// SETUP
//----------------------------------------------------------------
require('dotenv').config();
const rp = require('request-promise');


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.API_PORT;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/*' })); //this is required for the contentful webhooks


const MS_USERS_API = process.env.MS_USERS_API;
const MS_STORIES_API = process.env.MS_STORIES_API;

app.use(cors());

app.get('/v1/story', async (req, res) => {
    const result = await rp({
        method: 'GET',
        uri: `${MS_USERS_API}/story`,
        json: true 
    });

    res.json({ data: result });
})

app.get('/v1/users', async (req, res) => {
    const result = await rp({
        method: 'GET',
        uri: `${MS_USERS_API}/users`,
        json: true 
    });

    res.json({ data: result });
})

app.listen(PORT, () => console.log(`Server listen port ${PORT}`));

module.exports = app;
