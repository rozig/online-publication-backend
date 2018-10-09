const User = require('./../models/User');

let actions = {};

actions.getUserInfo = (req, res) => {
  User.findById(req.userId, {password: 0, __v: 0}, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting user information.'
      });
    }

    if(!user) {
      return res.status(404).send({
        code: 2000,
        message: 'User not found.'
      });
    }

    return res.status(200).send({
      code: 1000,
      message: 'Successful!',
      data: user
    });
  });
};

actions.updateUserInfo = (req, res) => {
  req.body.update_date = new Date();
  User.findByIdAndUpdate(req.userId, req.body, (err, updatedUser) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem updating user information.'
      });
    }

    return res.status(200).send({
      code: 1000,
      message: 'Successfully updated!',
      data: updatedUser
    });
  });
};

actions.deleteUserInfo = (req, res) => {
  User.findByIdAndRemove(req.userId, (err, deletedUser) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem deleting user.'
      });
    }

    return res.status(200).send({
      code: 1000,
      message: 'Successfully deleted!'
    });
  });
};

actions.followUser = (req, res) => {
  req.checkBody('following_user_id', 'following_user_id property is missing.');

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

  User.findById(req.userId, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting user information.'
      });
    }

    if(!user) {
      return res.status(404).send({
        code: 2000,
        message: 'User not found.'
      });
    }

    User.findById(req.body.following_user_id, (err, followingUser) => {
      if(err) {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem getting user information.'
        });
      }

      if(!followingUser) {
        return res.status(404).send({
          code: 2000,
          message: 'Following user not found.'
        });
      }

      Promise.all([user.follow(followingUser._id), followingUser.addFollower(user._id)]).then((data) => {
        return res.status(200).send({
          code: 1000,
          message: data[0]['type'] === 'follow' ? `You're now following @${followingUser.username}.` : `You stopped following @${followingUser.username}`,
          data: data[0]['type']
        });
      }).catch(err => {
        return res.status(500).send({
          code: 2000,
          message: 'There was a problem following user'
        });
      });
    });
  });
};

actions.changeProfilePicture = (req, res) => {
  try {
    const col = await loadCollect
  }
};

actions.checkAvailablity = (req, res) => {
  req.checkBody('type', 'type property is missing.');
  req.checkBody('value', 'value property is missing.');

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

  const condition = {};
  condition[req.body.type] = req.body.value;
  User.count(condition, (err, count) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: `There was a problem checking ${req.body.type} availablity`
      });
    }
    let response = {code: 1000};
    if(count > 0) {
      response.message = `${req.body.value} is not available!`;
      response.data = false;
    } else {
      response.message = `${req.body.value} is available!`;
      response.data = true;
    }
    return res.status(200).send(response);
  });
};

actions.getUserByUsername = (req, res) => {
  User.findOne({username: req.params.username}, {password: 0, __v: 0}, (err, user) => {
    if(err) {
      return res.status(500).send({
        code: 2000,
        message: 'There was a problem getting user information.'
      });
    }

    if(!user) {
      return res.status(404).send({
        code: 2000,
        message: 'User not found.'
      });
    }

    return res.status(200).send({
      code: 1000,
      message: 'Successful!',
      data: user
    });
  });
};

module.exports = actions;
