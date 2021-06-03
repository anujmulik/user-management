// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
