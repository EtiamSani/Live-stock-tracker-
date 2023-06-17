const API_KEY = process.env.API_KEY;
const URL_API = process.env.URL;
URL_SYMBOL_SEARCH = process.env.URL_SYMBOL_SEARCH;
const finnhub = require("finnhub");
const marketDatamapper = require("../model/marketData");
const APIError = require("../service/error/APIError");

const alphaVantageApiController = {
  tickerSearch: async (req, res, next) => {
    const symbol = req.params.caractertosearch;

    try {
      const seachByQuery = await marketDatamapper.findByCaracter(symbol);
      console.log(seachByQuery);
      res.json(seachByQuery);
    } catch {
      next(new APIError("Erreur lors de la récupération d'un caractère", 500));
    }
  },
  searchedCompanyPriceInformations: async (req, res) => {
    const symbol = req.params.symbol;

    try {
      const api_key = finnhub.ApiClient.instance.authentications["api_key"];
      api_key.apiKey = process.env.API_KEY;
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
  },
};

module.exports = alphaVantageApiController;
