
const { Router } = require('express');
const watchListRouter = Router();
const watchListController = require('../controllers/watchListController');




watchListRouter.get('/', watchListController.getAll);
watchListRouter.post('/', watchListController.creatList)
watchListRouter.put('/:listId', watchListController.updateList)
watchListRouter.get('/:listId', watchListController.findOneListWithStocks);




// on exporte le routeur
module.exports = watchListRouter;