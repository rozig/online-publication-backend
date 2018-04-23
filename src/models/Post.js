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
      created_date: {
      	type: Date,
      	default: Date.now
      }
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

PostSchema.methods.upVote = function() {
  this.upVotes++;
  return this.save();
};

PostSchema.methods.downVote = function() {
  this.downVotes++;
  return this.save();
};

PostSchema.methods.createComment = function(comment) {
  this.comments.push(comment);
  return this.save();
};

PostSchema.methods.deleteComment = function(commentId, userId) {

  const comment = this.comments.find(comment => comment._id == commentId);

  if(!comment) {
    return Promise.reject( {Err:'Comment not found!'});
  }

  if(comment.author == userId) {
    this.comments = this.comments.filter(comment => comment._id != commentId);
  }
  else{
    return Promise.reject({Err:'User has not permission for this!'});
  }

  return this.save();
};

PostSchema.methods.updateComment = function(commentId, userId,newText) {

  const comment = this.comments.find(comment => comment._id == commentId);


  if(!comment) {
    return Promise.reject({ err:'Comment not found!' });
  }

  if(comment.author == userId) {
    this.comments.forEach(comment => {
      if(comment._id == commentId) 
        comment.text = newText;
    });
  }
  else{
    return Promise.reject({ err:'User has not permission for this!' });
  }

  return this.save();
};

PostSchema.methods.setAuthor = function(authorId) {
  this.author = authorId;
  return this.save();

};

// PostSchema.methods.getAuthorPosts = function(authorId) {
//   // Post.find({author: authorId}).then((posts) {
//   //   //return posts;
//   // });
// };

PostSchema.methods.makeDraft = function(draft) {
  this.draft = draft;
  return this.save();
};

mongoose.model('Post', PostSchema);

module.exports = mongoose.model('Post');
