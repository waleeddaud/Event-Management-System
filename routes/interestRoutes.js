const express  =require('express')
const router = express.Router()
const { getInterests, createInterest } = require('../controllers/interestController')

//we can create a route to get all users which are joining the event
router.get("/", getInterests)
router.post("/", createInterest)
module.exports = router