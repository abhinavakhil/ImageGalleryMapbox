const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  imageName: String,
  // height: Number,
  // width: Number,
  // extension: String,
  userName: String,
  image: {
    type: String,
  },
  lat: Number,
  long: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
