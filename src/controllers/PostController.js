const Post = require('./../models/Post');
const Comment = require('./../models/Comment');

let actions = {};

actions.createPost = (req, res) => {
  req.checkBody('title', 'title property is missing.').notEmpty();
  req.checkBody('body', 'body property is missing.').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    let response = {
      code: 2000,
      message: 'Missing some fields!',
      data: []
    };
    errors.forEach((err) => {
      response.data.push(err.msg);
    });
    return res.status(500).send(response);
  }

  Post.create({
    title: req.body.title,
    body: req.body.body,
    draft: req.body.draft,
    author: req.userId
  }, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem creating post'
      });
    }

    post.populate('author', {
        firstname: 1,
        lastname: 1,
        email: 1,
        username: 1,
        profile_picture: 1
    }, (err, _post) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem getting post'
        });
      }
      return res.status(200).send({
        code: 1000,
        message: 'Successfully created!',
        data: _post
      });
    });
  });
};

actions.readPost = (req, res) => {
  Post.findById(req.params.id)
    // .populate('comments')
    // populate('comments.author')
    .populate('author', {
        firstname: 1,
        lastname: 1,
        email: 1,
        username: 1,
        profile_picture: 1
    }).exec((err, post) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem getting post'
        });
      }

      if(!post) {
        return res.status(500).send({
          code: 2000,
          message: 'Post not found'
        });
      }

      return res.status(200).send({
        code: 1000,
        message: 'Successfully read!',
        data: post
      });
    });
};

actions.updatePost = (req, res) => {
  req.body.updated_date = new Date();
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPost) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem updating post'
      });
    }
    return res.status(200).send({
      code: 1000,
      message: 'Successfully updated!',
      data: updatedPost
    });
  });
};

actions.deletePost = (req, res) => {
  Post.findByIdAndRemove(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem deleting post'
      });
    }
    return res.status(200).send({
      code: 1000,
      message: 'Successfully deleted!'
    });
  });
};

actions.createComment = (req, res) => {
  req.checkBody('text', 'text property is missing.').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    let response = {
      code: 2000,
      message: 'Missing some fields!',
      data: []
    };
    errors.forEach((err) => {
      response.data.push(err.msg);
    });
    return res.status(500).send(response);
  }

  Comment.create({
    author: userId,
    text: req.body.text
  }, (err, comment) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem creating comment'
      });
    }

    Post.findById(req.params.id, (err, post) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem getting post'
        });
      }

      post.createComment(req.body.text, req.userId).then(data => {
        return res.status(200).send({
          code: 1000,
          message: 'Comment successfully created!',
          data: {text: req.body.text, author: req.userId}
        });
      }).catch(err => {
        return res.status(500).send({
          code: 2000,
          message: err
        });
      });
    });
  });
};

actions.deleteComment = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting information from the database'
      });
    }

    post.deleteComment(req.params.comment_id, req.userId).then(data => {
      return res.status(200).send({
        code: 1000,
        message: 'Comment has deleted!'
      });
    }).catch(err => {
      return res.status(500).send({
        code: 2000,
        message: err
      });
    });
  });
};

actions.updateComment = (req, res) => {
  req.checkBody('text', 'text property is missing.').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    let response = {
      code: 2000,
      message: 'Missing some fields!',
      data: []
    };
    errors.forEach((err) => {
      response.data.push(err.msg);
    });
    return res.status(500).send(response);
  }

  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting post'
      });
    }

    post.updateComment(req.params.comment_id, req.userId, req.body.text).then(data => {
      return res.status(200).send({
        code: 1000,
        message: 'Comment has updated!',
        data: req.body.text
      });
    }).catch(err => {
      return res.status(500).send({
        code: 2000,
        message: err
      });
    });
  });
};

actions.vote = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem reading post'
      });
    }
    post.vote(req.body.type, req.userId).then(() => {
      return res.status(200).send({
        code: 1000,
        message: `Post ${req.body.type}d!`
      });
    }).catch(err => {
      return res.status(500).send({
        code: 2000,
        message: err
      });
    });
  });
};

module.exports = actions;
