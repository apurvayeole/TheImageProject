const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  body: String,
  lens: String,
  focalLength: String,
  aperture: String,
  shutterSpeed: String,
  iso: String,
}, { _id: false });

const albumSchema = new mongoose.Schema({
  title: String,
  location: String,
  year: String,
  description: String,
  coverImage: String,
  images: [String],
  camera: cameraSchema,
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
