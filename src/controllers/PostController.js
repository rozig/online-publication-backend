const Post = require('./../models/Post');
const User = require('./../models/User');
const Comment = require('./../models/Comment');

let actions = {};

actions.createPost = (req, res) => {
  req.checkBody('title', 'title property is missing.').notEmpty();
  req.checkBody('body', 'body property is missing.').notEmpty();
  req.checkBody('image', 'image property is missing.').notEmpty();
  req.checkBody('draft', 'draft property is missing.').notEmpty();

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
    image: req.body.image,
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
    .populate('author', {
        firstname: 1,
        lastname: 1,
        email: 1,
        username: 1,
        profile_picture: 1
    })
    .populate({
      path: 'comments',
      model: 'Comment',
      select: {
        _id: 1,
        text: 1,
        author: 1,
        created_date: 1
      },
      populate: {
        path: 'author',
        model: 'User',
        select: {
          firstname: 1,
          lastname: 1,
          email: 1,
          username: 1,
          profile_picture: 1
        }
      }
    })
    .exec((err, post) => {
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
  req.checkBody('title', 'title property is missing.').notEmpty();
  req.checkBody('body', 'body property is missing.').notEmpty();
  req.checkBody('image', 'image property is missing.').notEmpty();
  req.checkBody('draft', 'draft property is missing.').notEmpty();

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

  req.body.updated_date = new Date();
  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem updating post'
      });
    }

    if(!post) {
      return res.status(500).send({
        code: 2000,
        message: 'Post has not found!'
      });
    }

    if(post.author != req.userId) {
      return res.status(500).send({
        code: 2000,
        message: 'User has not permission for this'
      });
    }

    if(post.draft != req.body.draft || post.title != req.body.title || post.body != req.body.body || post.image != req.body.image) {
      post.draft = req.body.draft;
      post.title = req.body.title;
      post.image = req.body.image;
      post.body = req.body.body;
      post.save();
    } else {
      return res.status(500).send({
        code: 2000,
        message: 'Nothing has changed!'
      });
    }

    return res.status(200).send({
      code: 1000,
      message: 'Successfully updated!',
      data: post
    });
  });
};

actions.deletePost = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
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

    if(post.author != req.userId) {
      return res.status(500).send({
        code: 2000,
        message: 'User has not permission for this!'
      });
    }

    Comment.remove({
      _id: {
        $in: post.comments
      }
    }, (err, comment) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There is problem with deleting comments'
        });
      }

      post.remove((err, post) => {
        if(err) {
          return res.status(500).send({
            code: 2000,
            message: 'There is problem with deleting post'
          });
        }

        return res.status(200).send({
          code: 1000,
          message: 'Post has deleted!',
          data: post
        });
      });
    });
  });
}

actions.vote = (req, res) => {
  req.checkBody('type', 'Type property is missing!').notEmpty();

  const errors = req.validationErrors();
  if(errors) {
    let response = {
      code: 2000,
      message: 'Some field is missing',
      data: []
    };

    errors.forEach(err => {
      response.data.push(err.msg);
    });

    return res.status(500).send(response);
  }

  Post.findById(req.params.id, (err, post) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem reading post'
      });
    }

    if(!post) {
      return res.status(500).send({
        code: 2000,
        message: 'Post has not found!'
      });
    }

    if(req.body.type == 'upvote') {
      post.upVote(req.userId).then(() => {
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
    } else {
      post.downVote(req.userId)
        .then(() => {
          return res.status(200).send({
            code: 1000,
            message: `Post ${req.body.type}d!`
          });
        })
        .catch(err => {
            return res.status(500).send({
              code: 2000,
              message: err
            });
        });
    }

    // return res.status(200).send({
    //   code: 2000,
    //   message: `Post type:${req.body.type} is wrong!`
    // });

  });
};

actions.getPostsByUser = (req, res) => {
  User.findOne({username: req.params.username}, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting user'
      });
    }

    if(!user) {
      return res.status(500).send({
        code: 2000,
        message: 'User not found'
      });
    }

    Post.find({author: user._id})
      .sort('-created_date')
      .limit(5)
      .populate('author', {
          firstname: 1,
          lastname: 1,
          email: 1,
          username: 1,
          profile_picture: 1
      })
      .populate({
        path: 'comments',
        model: 'Comment',
        select: {
          _id: 1,
          text: 1,
          author: 1,
          created_date: 1
        },
        populate: {
          path: 'author',
          model: 'User',
          select: {
            firstname: 1,
            lastname: 1,
            email: 1,
            username: 1,
            profile_picture: 1
          }
        }
      })
      .exec((err, posts) => {
        if(err) {
          return res.status(500).send({
            code: 2000,
            message: 'There was a problem getting post'
          });
        }

        return res.status(200).send({
          code: 1000,
          message: 'Successful!',
          data: posts
        });
      });
  });
};

actions.getPosts = (req, res) => {
  Post.find()
    .sort('-created_date')
    .limit(9)
    .populate('author', {
        firstname: 1,
        lastname: 1,
        email: 1,
        username: 1,
        profile_picture: 1
    })
    .populate({
      path: 'comments',
      model: 'Comment',
      select: {
        _id: 1,
        text: 1,
        author: 1,
        created_date: 1
      },
      populate: {
        path: 'author',
        model: 'User',
        select: {
          firstname: 1,
          lastname: 1,
          email: 1,
          username: 1,
          profile_picture: 1
        }
      }
    })
    .exec((err, posts) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem getting post'
        });
      }

      return res.status(200).send({
        code: 1000,
        message: 'Successful!',
        data: posts
      });
    });
};

module.exports = actions;
