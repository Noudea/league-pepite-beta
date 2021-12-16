import jwt from 'jsonwebtoken'

const createToken = async (tokenBody) => {
  try {
    const token = jwt.sign(tokenBody, process.env.JWT_SECRET, { expiresIn: '30 days' })
    return token
  } catch (error) {
    console.log(error)
    return false
  }
}

const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    return decoded
  } catch (error) {
    console.log(error)
    return false
  }
}

export { createToken, verifyToken }
