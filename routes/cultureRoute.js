const express = require('express')

const router = express.Router()

const cultureController = require('../controller/cultureController')

router.get('/',cultureController.culture)

module.exports = router