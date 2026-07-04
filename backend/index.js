const express = require('express');
const cors = require('cors');
const albums = require('./albums.json');


const app = express();

app.use(cors());

app.use(express.static('public'));

app.get('/api/albums', (req,res) => {
    res.json(albums);
})

app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
})