const express = require('express');
const cors = require('cors');
const db = require('./database');
const jwt = require("jsonwebtoken");
const app = express();
const User = require('./public/user');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.get('/api/albums', (req,res) => {
    const rows = db.prepare('SELECT * FROM albums').all()
    const albums = rows.map(row => ({
        ...row,
        images: JSON.parse(row.images),
        camera: JSON.parse(row.camera)
    }))
    res.json(albums)
})

mongoose.connect("mongodb://127.0.0.1:27017/THEPROJECT")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));



app.get('/api/albums/:index', (req, res) => {
    const rows = db.prepare('Select * FROM albums').all()
    const index = parseInt(req.params.index)
    if(index < 0 || index>= rows.length){
        return res.status(404).json({error:'ALbum not found'})
    }
    const row = rows[index]
    res.json({
        ...rows,
        images: JSON.parse(row.images),
        camera: JSON.parse(row.camera)
    })
})

function authorizeUser(req, res, next){
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(404).send({message:"Not authorize user"});
    }
    next();
}

app.post("/signup", async(req,res)=>{
    try{
      const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();

    const token = jwt.sign(
      { userId: newUser._id },
      "your-secret-key",
      { expiresIn: "1h" }
    );
    console.log("token : ",token);

    res.json({ message: "User created successfully!" });

    }catch{
        res.status(404).json({message:"User not store in db"});
    }
    console.log("token : ",token);
    console.log(req.body);
    res.json({message : "data received"});
})
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
})