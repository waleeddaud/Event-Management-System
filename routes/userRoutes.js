const express = require('express')
const router = express.Router()
const { getUsers , createUser  } = require('../controllers/userController')
//Get all users 
router.get("/", getUsers)
router.post("/register", createUser)

module.exports = router