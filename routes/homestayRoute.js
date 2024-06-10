const express = require('express')

const router = express.Router()

const homestayController = require('../controller/homestayController')

router.get('/',homestayController.homestay)

module.exports = router