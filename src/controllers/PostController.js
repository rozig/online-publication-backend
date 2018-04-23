const Post = require('./../models/Post');

let actions = {};

actions.createPost = (req, res) => {
  Post.create({
    title: req.body.title,
    body: req.body.body
  }, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem adding the information to the database'
      });
    }
    return res.status(200).send(user);
  });
};

module.exports = actions;
