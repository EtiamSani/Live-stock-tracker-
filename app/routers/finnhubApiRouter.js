const { Router } = require("express");
const finnhubApiRouter = Router();
const finnhubApiController = require("../controllers/finnhubApiController");

finnhubApiRouter.get("/:caractertosearch", finnhubApiController.tickerSearch);
finnhubApiRouter.get(
  "/price/:symbol",
  finnhubApiController.searchedCompanyPriceInformations
);
finnhubApiRouter.get("/logo/:symbol", finnhubApiController.companyLogo);

module.exports = finnhubApiRouter;
