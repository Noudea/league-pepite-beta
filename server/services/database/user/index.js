import UserModel from '../../../models/User'
import { hashPassword } from '../../password'

/**
 * get user with a filter in the db
 */
const getUser = async (filter) => {
  const userExist = await UserModel.exists(filter)
  if (!userExist) {
    return false
  }
  const user = await UserModel.find(filter)
  return user[0]
}

/**
 * function to create user in the database
 */
const createUser = async (user) => {
  const userExist = await UserModel.exists({ email: user.email })
  if (userExist) {
    return false
  }
  return await UserModel.create({ ...user, password: await hashPassword(user.password) })
}

export { createUser, getUser }
