
const { Router } = require('express');
const watchListRouter = Router();
const watchListController = require('../controllers/watchListController');




watchListRouter.get('/', watchListController.getAll);




// on exporte le routeur
module.exports = watchListRouter;