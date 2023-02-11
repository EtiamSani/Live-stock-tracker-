const API_KEY = process.env.API_KEY
const URL_API = process.env.URL
const axios = require("axios");

const priceController = {
    getLastPrice : async (req,res) => {
        const symbol = req.params.symbol
        try {    
        const response = await axios.get(`${URL_API}${symbol}&interval=1min&apikey=${API_KEY}`)    
        const stockPrice = response.data["Time Series (1min)"]
        const lastPrice = Object.values(stockPrice)
        res.json(lastPrice[0]["4. close"])
        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    },
    getLastPriceDateInfo : async (req,res) => {
        const symbol = req.params.symbol
        try {    
        const response = await axios.get(`${URL_API}${symbol}&interval=1min&apikey=${API_KEY}`)    
        const stockPrice = response.data["Time Series (1min)"]
        const lastPrice = Object.keys(stockPrice)
        res.json(lastPrice[0])
        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    }

}

module.exports = priceController 
