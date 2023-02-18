const { Router } = require('express');
const brandFetchApiRouter = Router();
const brandFetchApiController = require('../controllers/brandfetchApiController');

brandFetchApiRouter.get('/company/:companyname', brandFetchApiController.getCompanyLogo);


module.exports = brandFetchApiRouter;