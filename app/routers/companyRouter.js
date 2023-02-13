
const { Router } = require('express');
const companyRouter = Router();
const companyController = require('../controllers/companyController');




companyRouter.get('/', companyController.getAllCompany);
companyRouter.get('/:companyId', companyController.getOneCompany);
companyRouter.post('/', companyController.creatCompany);





// on exporte le routeur
module.exports = companyRouter;