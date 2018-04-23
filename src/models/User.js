const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  username: String,
  bio: String,
  profile_picture: String,
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

UserSchema.methods.follow = (userId) => {
  if(this.following.indexOf(userId) === -1) {
    this.following.push(user_id);
  }
  return this.save();
};

UserSchema.methods.addFollower = (user) => {
  this.followers.push(user);
  return this.save();
}

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
