var express = require('express');
const User = require('../../../models/user.js');

const router = express.Router()
router.get('/test', async (req, res) => {
    return (res.status(200).json({id:1,string:'blabla'})
    )
})

router.post('/register', async (req, res) => {

  try {
    console.log(req.body)
    const createdUser = await User.create(req.body)
    console.log(createdUser)
    if(createdUser) {
      return res.redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
})



router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    
  } catch (error) {
    
  }
})

router.get('/getdata', async (req, res) => {
  try {
    console.log("getdata ")
    const users = await User.find({})
    console.log('userfind',users)
    res.status(200).json({success: true, data: users})
  } catch (error) {
    console.log(error)
  }
})


module.exports = router