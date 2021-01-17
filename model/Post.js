const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = Schema(
  {
    title: {type: String, required: true},
    description: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model('Exercise', postSchema);

module.exports = Post;
