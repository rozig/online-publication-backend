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
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      created_date: {
        type: Date,
        require: true,
        default: Date.now
      }
    }
  ],
  downVotes: [
    {
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      created_date: {
        type: Date,
        require: true,
        default: Date.now
      }
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

PostSchema.methods.upVote = function(userId) {

  const upVote = this.upVotes.find(vote=>vote.author == userId);
  const downVote = this.downVotes.find(vote=>vote.author == userId);

  console.log(upVote);

  if(!upVote){
    this.upVotes.push({author: userId});
    if(downVote)
      this.downVotes.pull(downVote);
  }
  else
    this.upVotes.pull(upVote); 

  return this.save();

};

PostSchema.methods.downVote = function(userId) {

  const downVote = this.downVotes.find(vote=>vote.author == userId);
  const upVote = this.upVotes.find(vote=>vote.author == userId);

  if(!downVote){
    this.downVotes.push({author: userId});
    if(upVote) 
      this.upVotes.pull(upVote);
  }
  else
    this.downVotes.pull(downVote); 

  return this.save();

};



PostSchema.methods.addUpVote = function(vote_id) {
  
  this.upVotes.push(vote_id);
  return this.save();

};

PostSchema.methods.deleteUpVote = function(vote_id) {
  
  this.upVotes.pull(vote_id);
  return this.save();
  
};

PostSchema.methods.addComment = function(commentid) {
  
  this.comments.push(commentid);
  return this.save();
};

PostSchema.methods.deleteComment = function(commentId) {

  const comment = this.comments.pull(commentId);

  if(!comment) {
    return Promise.reject({error: 'Comment not found!'});
  }

  this.comments = this.comments.filter(comment => comment._id != commentId);

  return this.save();
};

PostSchema.methods.updateComment = function(commentId, newText) {

  const comment = this.comments.find(comment => comment._id == commentId);

  if(!comment) {
    return Promise.reject({error: 'Comment not found!'});
  }
  this.comments.forEach(comment => {
      if(comment._id == commentId)
        comment.text = newText;
  });
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
