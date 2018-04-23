const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: String,
  body: String,
  draft: {
    type: Boolean,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      text: String,
      created_date: Date
    }
  ],
  upVotes: {
    type: Number,
    default: 0
  },
  downVotes: {
    type: Number,
    default: 0
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: Date
});

PostSchema.methods.upVote = () => {
  this.upVotes++;
  return this.save();
};

PostSchema.methods.downVote = () => {
  this.downVotes++;
  return this.save();
};

PostSchema.methods.comment = (comment) => {
  this.comments.push(comment);
  return this.save();
};

PostSchema.methods.setAuthor = (authorId) => {
  this.author = authorId;
  return this.save();
};

PostSchema.methods.getAuthorPosts = (authorId) => {
  Post.find({author: authorId}).then((posts) => {
    return posts;
  });
};

PostSchema.methods.makeDraft = (draft) => {
  this.draft = draft;
  return this.save();
};

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
