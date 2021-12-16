import UserModel from '../../../models/User'
import { hashPassword } from '../../password'

const getUser = async (filter) => {
  return await UserModel.find({ filter: filter })
}
const createUser = async (user) => {
  const userExist = await UserModel.exists()
  console.log('userExist', userExist)
  if (userExist) {
    return false
  }
  return await UserModel.create({ ...user, password: await hashPassword(user.password) })
}

export { createUser, getUser }
