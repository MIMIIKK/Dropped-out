const express = require('express')

const router = express.Router()

const homeRoute = require('./homeRoute')
const aboutRoute = require('./aboutusRoute')
const contactRoute = require('./contactRoute')
const cultureRoute = require('./cultureRoute')
const homestayRoute = require('./homestayRoute')
const connectRoute = require('./connectRoute')


router.use('/',homeRoute)
router.use('/about',aboutRoute)
router.use('/contact',contactRoute)
router.use('/culture',cultureRoute)
router.use('/homestay',homestayRoute)
router.use('/connect',connectRoute)


module.exports = router