const { Router } = require("express");
const investorRouter = Router();
const investorController = require("../controllers/investorController");

investorRouter.put("/:id", investorController.updateInvestor);

module.exports = investorRouter;
