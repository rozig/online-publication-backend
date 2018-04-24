const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  text: {
    type: String,
    required: true
  },
  created_date: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_date: {
    type: Date,
    required: false
  }
});

mongoose.model('Comment', CommentSchema);

module.exports = mongoose.model('Comment');
