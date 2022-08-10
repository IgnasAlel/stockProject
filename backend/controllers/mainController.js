const finnhub = require('finnhub')
const actionSchema = require('../models/actionSchema')
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.API_KEY
const finnhubClient = new finnhub.DefaultApi()
module.exports ={
    companySearch: async (req,res) => {
        const ticker =  req.body.company
        finnhubClient.companyProfile2({'symbol': `${ticker}`}, (error, data, response) => {
            if (Object.keys(data).length === 0){
                res.send({success:false})
            } else {
                res.send({success: true, info: data})
            }
        })
    },
    getCandles: (req,res) => {
        const {symbol, start, end, interval} = req.body
        finnhubClient.stockCandles(symbol, interval,start+10800,end+10800, (error,data,response)=>{
           if (data.s === 'ok'){
               const action = new actionSchema
               action.companyTicker = symbol
               action.priceInfo = data
               action.save()
               console.log(action)
               res.send({success:true, data})
           } else {
                res.send({success: false})
           }
        })
    }
}