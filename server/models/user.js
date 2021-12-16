import mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  }
}, { timestamps: true })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel
