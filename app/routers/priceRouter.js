
const { Router } = require('express');
const priceRouter = Router();
const priceController = require('../controllers/priceController');




priceRouter.get('/:symbol', priceController.getLastPrice);
priceRouter.get('/:symbol/time', priceController.getLastPriceDateInfo);



// on exporte le routeur
module.exports = priceRouter;