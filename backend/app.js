const express = require('express')
const app = express()
require("dotenv").config()
const cors = require("cors")
const router = require('./router/mainRouter')
const mongoose = require('mongoose')
const connectionString = `mongodb+srv://${process.env.MONGODB_KEY}@cluster0.cwjxo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(connectionString)
    .then(res => {
        console.log("database connected")
    }).catch(e =>{
    console.log(e)
})
app.listen(4002)
app.use(cors())
app.use(express.json())
app.use('/', router)