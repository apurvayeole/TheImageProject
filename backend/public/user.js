const mongoose = require("mongoose");

// Part 1: Schema — defines the SHAPE of your data
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Part 2: Model — turns the schema into something you can actually use to query/save
const User = mongoose.model("User", userSchema);

// Part 3: Export it so other files (like your routes) can use this Model
module.exports = User;