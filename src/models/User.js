const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  bio: String,
  profile_picture: {
    type: String,
    default: '/assets/profile-placeholder.jpg',
    required: true
  },
  password: String,
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  created_date: {
    type: Date,
    default: Date.now
  },
  updated_date: Date
});

UserSchema.methods.follow = function(userId) {
  let type;
  if(this.following.indexOf(userId) === -1) {
    this.following.push(userId);
    type = 'follow';
  } else {
    this.following.pull(userId);
    type = 'unfollow';
  }
  this.save();
  return {type: type};
};

UserSchema.methods.addFollower = function(userId) {
  if(this.followers.indexOf(userId) === -1) {
    this.followers.push(userId);
    type = 'follow';
  } else {
    this.followers.pull(userId);
    type = 'unfollow';
  }
  this.save();
  return {type: type};
}

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
