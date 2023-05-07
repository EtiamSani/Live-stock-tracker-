
const { Router } = require('express');
const companyRouter = Router();
const companyController = require('../controllers/companyController');


companyRouter.get('/', companyController.getAllCompany);
companyRouter.get('/:companyId', companyController.getOneCompany);
companyRouter.post('/', companyController.creatCompany);
companyRouter.delete('/:companyId', companyController.deleteCompany);
companyRouter.put('/:companyId', companyController.updateEntryPrice);
companyRouter.get('/symbol/:symbol', companyController.findCompanyWithSymbol);





// on exporte le routeur
module.exports = companyRouter;