import express from 'express'
import { createUser, getUser } from '../../../services/database/user'
import { verifyPassword } from '../../../services/password'
import { createToken, verifyToken } from '../../../services/token'

const router = express.Router()

/**
 * route to register a user
 */
router.post('/register', async (req, res, next) => {
  try {
    const createdUser = await createUser(req.body)
    if (createdUser) {
      return res.status(200).json({
        success: {
          redirect: '/'
        }
      })
    } else {
      // code 200 for implicit handling of duplicates
      return res.status(200).json({
        error: {
          name: 'TODO',
          description: 'TODO'
        }
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: {
        name: 'TODO',
        description: 'TODO'
      }
    })
  }
})

/**
 * router to login a user
 */
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email) {
      return res.status(422).json({
        error: {
          name: 'TODO',
          description: 'TODO'
        }
      })
    }

    if (!password) {
      return res.status(422).json({
        error: {
          name: 'TODO',
          description: 'TODO'
        }
      })
    }

    const user = await getUser({ email: email })
    if (!user) {
      return res.status(401).json({
        error: {
          name: 'invalid_credentials',
          description: 'incorrect password or email'
        }
      })
    }
    if (!(await verifyPassword(password, user.password))) {
      return res.status(401).json({
        error: {
          name: 'invalid_credentials',
          description: 'incorrect password or email'
        }
      })
    }

    const token = await createToken({
      user: {
        email: user.email,
        id: user._id
      }
    })

    if (token) {
      return res.status(200).json({
        success: {
          token: token
        }
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: {
        name: 'TODO',
        description: 'TODO'
      }
    })
  }
})

router.post('/verifyToken', async (req, res) => {
  const { token } = req.body

  const validDecodedToken = await verifyToken(token)

  console.log(validDecodedToken)

  return res.status(200).json({
    success: {
      token: validDecodedToken
    }
  })
})

export default router
