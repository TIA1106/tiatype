const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  authorId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
