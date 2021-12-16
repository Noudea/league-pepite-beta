const {model} = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  updated_at: Date,
  created_at: Date
})

const UserModel = model('User', UserSchema)

module.exports = UserModel