const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('./../models/User');

let actions = {};

actions.register = (req, res) => {
  req.checkBody('firstname', 'firstname property is missing.').notEmpty();
  req.checkBody('lastname', 'lastname property is missing.').notEmpty();
  req.checkBody('email', 'email property is missing.').notEmpty();
  req.checkBody('email', 'Please enter valid email.').isEmail();
  req.checkBody('username', 'username property is missing.').notEmpty();
  req.checkBody('profile_picture', 'profile_picture property is missing.').notEmpty();
  req.checkBody('password', 'password property is missing.').notEmpty();

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

  const hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    profile_picture: req.body.profile_picture,
    password: hashedPassword
  }, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem registering the user'
      });
    }

    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60 * 60 * 24});
    return res.status(200).send({
      code: 1000,
      message: 'Successfully registered!',
      data: token
    });
  });
};

actions.login = (req, res) => {
  req.checkBody('username', 'username property is missing.').notEmpty();
  req.checkBody('password', 'password property is missing.').notEmpty();

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

  User.findOne({username: req.body.username}, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a error logging the user in'
      });
    }
    if(!user) {
      return res.status(500).send({
        code:2000,
        message: 'Username or password is wrong'
      });
    }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if(!isPasswordValid) {
      return res.status(401).send({
        code: 2000,
        message: 'Username or password is wrong'
      });
    }

    const token = jwt.sign({id: user._id}, process.env.SECRET, {expiresIn: 60 * 60 * 24});

    return res.status(200).send({
      code: 1000,
      message: 'Successfully logged in!',
      data: token
    });
  });
};

module.exports = actions;
