const express = require('express')

const router = express.Router()

const connectController = require('./../controller/connectController')

router.get('/',connectController.connect)

module.exports = router