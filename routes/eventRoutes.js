const express = require("express")
const router = express.Router()
const { getEvents, createEvent } = require('../controllers/eventController')

router.post("/", createEvent)
router.get("/", getEvents)

module.exports = router