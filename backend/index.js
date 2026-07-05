const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/api/albums', (req,res) => {
    const rows = db.prepare('SELECT * FROM albums').all()
    const albums = rows.map(row => ({
        ...row,
        images: JSON.parse(row.images),
        camera: JSON.parse(row.camera)
    }))
    res.json(albums)
})

app.get('/api/albums/:index', (req, res) => {
    const rows = db.prepare('Select * FROM albums').all()
    const index = parseInt(req.params.index)
    if(index < 0 || index>= rows.length){
        return resstatus(404).json({error:'ALbum not found'})
    }
    const row = rows[index]
    res.json({
        ...rows,
        images: JSON.parse(row.images),
        camera: JSON.parse(row.camera)
    })
})
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
})