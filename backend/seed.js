const mongoose = require('mongoose');
const Album = require('./public/album.js');
const albums = require('./albums.json');

mongoose.connect("mongodb://127.0.0.1:27017/THEPROJECT")
  .then(async () => {
    await Album.deleteMany({});
    await Album.insertMany(albums);
    console.log("Database seeded");
    await mongoose.connection.close();
  })
  .catch((err) => console.log("MongoDB connection error:", err));
