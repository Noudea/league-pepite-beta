import express from 'express'
import { createUser } from '../../../services/database/user'

const router = express.Router()

/**
 * route to get all users, only admin can use this route
 */
router.post('/register', async (req, res, next) => {
  try {
    console.log(req.body)
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

export default router
