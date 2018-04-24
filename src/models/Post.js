const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  draft: {
    type: Boolean,
    required: true,
    default: false
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  upVotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vote'
    }
  ],
  downVotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vote'
    }
  ],
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

PostSchema.methods.vote = function(type, userId) {
  if(type === 'upvote') {
    this.upVotes.push({author: userId});
  } else {
    this.downVotes.push({author: userId});
  }
  return this.save();
};

PostSchema.methods.createComment = function(comment, userId) {
  this.comments.push({text: comment, author: userId});
  return this.save();
};

PostSchema.methods.deleteComment = function(commentId, userId) {
  const comment = this.comments.find(comment => comment._id == commentId);
  if(!comment) {
    return Promise.reject({error: 'Comment not found!'});
  }

  if(comment.author == userId) {
    this.comments = this.comments.filter(comment => comment._id != commentId);
  } else {
    return Promise.reject({error: 'User has not permission for this!'});
  }
  return this.save();
};

PostSchema.methods.updateComment = function(commentId, userId, newText) {
  const comment = this.comments.find(comment => comment._id == commentId);
  if(!comment) {
    return Promise.reject({error: 'Comment not found!'});
  }

  if(comment.author == userId) {
    this.comments.forEach(comment => {
      if(comment._id == commentId)
        comment.text = newText;
    });
  } else {
    return Promise.reject({error: 'User has not permission for this!'});
  }
  return this.save();
};

PostSchema.methods.setAuthor = function(authorId) {
  this.author = authorId;
  return this.save();
};

PostSchema.methods.getAuthorPosts = function(authorId) {
};

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
