const Post = require('./../models/Post');

let actions = {};

actions.createPost = (req, res) => {
  req.checkBody('title', 'title field is required.').notEmpty();
  req.checkBody('body', 'body field is required.').notEmpty();

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
    draft: req.body.draft
  }, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem adding the information to the database'
      });
    }
    return res.status(200).send({
      code: 1000,
      message: 'Successfully created!',
      data: user
    });
  });
};

actions.readPost = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting information from the database'
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
        message: 'There was a problem updating information in the database'
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
        message: 'There was a problem deleting document from the database'
      });
    }
    return res.status(200).send({
      code: 1000,
      message: 'Successfully deleted!'
    });
  });
};

actions.createComment = (req,res) => {
  req.checkBody('text','Comment text is required').notEmpty();

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
        message: 'There was a problem getting information from the database'
      });
    }

    const comment = {
      author:req.userId,
      text:req.body.text
    }

    post.createComment(comment)
    .then(data=>{
        return res.status(200).send({
          code: 1000,
          message: 'Comment successfully created!'
          //data:data
        });
    }).catch(err=>{
        return res.status(500).send({
        code: 2000,
        message: err
        });
    });

  });
}

module.exports = actions;
