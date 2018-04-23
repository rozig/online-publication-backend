const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  draft: Boolean,
  created_date: Date,
  updated_date: Date
});

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
