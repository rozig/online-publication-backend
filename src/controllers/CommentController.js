const Post = require('./../models/Post');
const Comment = require('./../models/Comment');

let actions = {};

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

  Post.findById(req.params.post_id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There is no post for comment you wrote!'
      });
    }

    if(!post) {
      return res.status(500).send({
        code: 2000,
        message: 'Post has not found!'
      });
    }

    Comment.create({
      author: req.userId,
      text: req.body.text
    }, (err, comment) => {
      //console.log(comment);
      if(err) {
        return res.status(500).send({
          code: 500,
          message: 'There is a problem creating comment'
        });
      }

      post.addComment(comment._id).then(data => {
        return res.status(200).send({
          code: 1000,
          message: 'Comment created successfully',
          data: data
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
  Post.findById(req.params.post_id).populate('comments').exec((err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There is problem with getting information!'
      });
    }

    if(!post) {
      return res.status(500).send({
        code: 2000,
        message: 'Post has not found!'
      });
    }

    const comment = post.comments.find(comment => comment._id == req.params.comment_id);
    if(!comment) {
      return res.status(500).send({
        code: 2000,
        message: 'Comment has not found!'
      });
    }

    if(comment.author != req.userId) {
      return res.status(500).send({
        code: 2000,
        message: 'User has not permission for this!'
      });
    }

    post.deleteComment(req.params.comment_id).then(data => {
      Comment.findByIdAndRemove(req.params.comment_id, (err, comment) => {

        if(err) {
          return res.status(500).send({
            code: 2000,
            message: 'There was a problem getting information from the database'
          });
        }

        return res.status(200).send({
          code: 1000,
          message: 'Comment has deleted!'
        });
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

  Post.findById(req.params.post_id).populate('comments').exec((err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There is problem with getting information!'
      });
    }

    if(!post) {
      return res.status(500).send({
        code: 2000,
        message: 'Post has not found!'
      });
    }

    const comment = post.comments.find(comment => comment._id == req.params.comment_id);
    if(!comment) {
      return res.status(500).send({
        code: 2000,
        message: 'Comment has not found!'
      });
    }

    if(comment.author != req.userId) {
      return res.status(500).send({
        code: 2000,
        message: 'User has not permission for this!'
      });
    }

    post.updateComment(req.params.comment_id).then(data => {
      Comment.findByIdAndUpdate(req.params.comment_id, req.body, { new: true }, (err, updatedComment) => {
        if(err) {
          return res.status(500).send({
            code: 2000,
            message: 'There was a problem getting information from the database'
          });
        }

        return res.status(200).send({
          code: 1000,
          message: 'Comment has updated!',
          data: updatedComment
        });
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
