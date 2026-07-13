const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const app = express();
const User = require('./public/user');
const Album = require('./public/album');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/THEPROJECT")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error:", err));

app.get('/api/albums', async (req, res) => {
    const albums = await Album.find({});
    res.json(albums)
})

app.get('/api/albums/:index', async (req, res) => {
    const albums = await Album.find({});
    const index = parseInt(req.params.index)
    if(index < 0 || index>= albums.length){
        return res.status(404).json({error:'ALbum not found'})
    }
    res.json(albums[index])
})

function veriyToken(req,res,next){
    try{
    const authHeader = req.headers['authentication'];

    if(!authHeader){
        return res.status(401).json({message:"Token not provided"});
    }

    const token = authHeader.split("")[1];

    const validToken = jwt.verify(token,"your-secret-key");
    if(validToken.userId = req.userId){
        console.log("valid user");
        next();
        return res.status(200).json({message:"valid user"});
    }else{
        return res.status(401).json({message:"wrong token"});
    }
    }catch(error){
        console.error("error occured", error.message);
    }
}

app.post("/signup", async(req,res,next)=>{
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
        res.status(404).send("User not store in db");
    }
    console.log("token : ",token);
    console.log(req.body);
    res.json({message : "data received"});

    next();
})

app.post('/login', async (req,res,next)=>{
    const user = await User.findOne({email : req.body.email});

    if(!user){
        return res.status(404).json({message:"User is not define"});
    }
    if(user.password === req.body.password){
        const token = jwt.sign(
      { userId: user._id },
      "your-secret-key",
      { expiresIn: "1h" }
    );
    console.log("token : ",token);
    console.log("Login done");
    return res.json({token: token});
    }else{
        return res.status(404).json({message:"Wrong Password"});
    } 
})

app.post('/home' ,veriyToken, (req,res) =>{
    console.log("Welcome home");
})
app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
})