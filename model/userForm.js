const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: String, // You can add more fields like email, name, etc.
  path: String, // Internship path
});

const User = mongoose.model('User', userSchema);

module.exports = User;
