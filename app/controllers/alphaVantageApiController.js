const API_KEY = process.env.API_KEY
const URL_API = process.env.URL
URL_SYMBOL_SEARCH = process.env.URL_SYMBOL_SEARCH
const axios = require("axios");

const alphaVantageApiController = { 
    tickerSearch : async (req,res) => {
        const symbol = req.params.caractertosearch
        try {    
        const response = await axios.get(`${URL_SYMBOL_SEARCH}${symbol}&apikey=${API_KEY}`)    
        const tickerSearchResults = response.data.bestMatches
        res.json(tickerSearchResults)
        
        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    },
    searchedCompanyPriceInformations : async (req,res) => {
        const symbol = req.params.symbol
        try {    
        const response = await axios.get(`${URL_API}${symbol}&apikey=${API_KEY}`)    
        const stockPrice = response.data
        res.json(stockPrice)
        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    },

}

module.exports = alphaVantageApiController