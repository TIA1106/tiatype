const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  bio: String,
  profilePic: String,
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
