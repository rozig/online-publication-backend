const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created_date: {
    type: Date,
    require: true,
    default: Date.now
  }
});

mongoose.model('Vote', VoteSchema);

module.exports = mongoose.model('Vote');
