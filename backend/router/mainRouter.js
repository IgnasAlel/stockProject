const express = require('express')
const router = express.Router()
const {companySearch, getCandles} = require('../controllers/mainController')
router.post('/search', companySearch)
router.post('/candles', getCandles)
module.exports = router