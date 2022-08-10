const mongoose = require('mongoose')
const Schema = mongoose.Schema
const actionSchema = new Schema({
    companyTicker:{
        type: String,
        required: true
    },
    priceInfo: {
        type: Object,
        required: true
    }
})
module.exports = mongoose.model('userAction', actionSchema)