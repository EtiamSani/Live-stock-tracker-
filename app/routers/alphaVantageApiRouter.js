const { Router } = require('express');
const alphaVantageApiRouter = Router();
const alphaVantageApiController = require('../controllers/alphaVantageApiController');


alphaVantageApiRouter.get('/:caractertosearch', alphaVantageApiController.tickerSearch);
alphaVantageApiRouter.get('/price/:symbol', alphaVantageApiController.searchedCompanyPriceInformations);
alphaVantageApiRouter.get('/logo/:symbol', alphaVantageApiController.companyLogo);




module.exports = alphaVantageApiRouter;
