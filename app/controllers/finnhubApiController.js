const API_KEY = process.env.API_KEY
const URL_API = process.env.URL
URL_SYMBOL_SEARCH = process.env.URL_SYMBOL_SEARCH
const axios = require("axios");
const finnhub = require('finnhub');

const alphaVantageApiController = { 
    tickerSearch : async (req,res) => {
        // const symbol = req.params.caractertosearch
        // try {    
        // const response = await axios.get(`${URL_SYMBOL_SEARCH}${symbol}&apikey=${API_KEY}`)    
        // const tickerSearchResults = response.data.bestMatches
        // res.json(tickerSearchResults)
        
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).render('error', error);
        //   }

        const symbol = req.params.caractertosearch
        try {
          const api_key = finnhub.ApiClient.instance.authentications["api_key"];
          api_key.apiKey = "cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg";
          const finnhubClient = new finnhub.DefaultApi();
      
          finnhubClient.symbolSearch(symbol, (error, data, response) => {
            if (error) {
              console.error(error);
              res.status(500).render("error", error);
            } else {
              res.json(data);
            }
          });
        } catch (error) {
          console.error(error);
          res.status(500).render("error", error);
        }

    },
    searchedCompanyPriceInformations : async (req,res) => {
        const symbol = req.params.symbol
        
        try {
            const api_key = finnhub.ApiClient.instance.authentications["api_key"];
            api_key.apiKey = "cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg";
            const finnhubClient = new finnhub.DefaultApi();
        
            finnhubClient.quote(symbol, (error, data, response) => {
              if (error) {
                console.error(error);
                res.status(500).render("error", error);
              } else {
                res.json(data);
              }
            });
          } catch (error) {
            console.error(error);
            res.status(500).render("error", error);
          }
        // try {    
        // const response = await axios.get(`${URL_API}${symbol}&apikey=${API_KEY}`)    
        // const stockPrice = response.data
        // res.json(stockPrice)
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).render('error', error);
        //   }
    },
    companyLogo : async (req,res) => {
   
      const symbol = req.params.symbol
      try {
        const api_key = finnhub.ApiClient.instance.authentications["api_key"];
        api_key.apiKey = "cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg";
        const finnhubClient = new finnhub.DefaultApi();
        
        finnhubClient.companyProfile2({'symbol': symbol}, (error, data, response) => {
          if (error) {
            console.error(error);
            res.status(500).render("error", error);
          } else {
            res.json(data);
          }
        });
      } catch (error) {
        console.error(error);
        res.status(500).render("error", error);
      }
    }
      
}

module.exports = alphaVantageApiController