const watchListDatamapper = require("../model/watchList");
const watchlistHasCompanyDatamapper = require("../model/watchListHasCompany");
const errors = require("../modules/errors");

const watchListController = {
  getAll: async (_, res) => {
    try {
      const allLists = await watchListDatamapper.findAll();
      res.json(allLists);
    } catch (err) {
      errors.error500(res, err);
    }
  },
  creatList: async (req, res) => {
    const newWatchListData = {
      name: req.body.name,
      investor_id: req.body.investor_id,
    };

    try {
      const list = await watchListDatamapper.create(newWatchListData);
      res.json(list);
    } catch (err) {
      errors.error500(res, err);
    }
  },
  updateList: async (req, res) => {
    const id = req.params.listId;

    const inputData = {
      name: req.body.name,
    };

    try {
      const updatedList = await watchListDatamapper.update({ id }, inputData);
      res.json(updatedList);
    } catch (err) {
      errors.error500(res, err);
    }
  },
  findOneListWithStocks: async (req, res) => {
    const listId = Number(req.params.listId);

    try {
      const list = await watchListDatamapper.findCompaniesInWatchlist(listId);
      res.json(list);
    } catch (err) {
      errors.error500(res, err);
    }
  },
  deleteList: async (req, res) => {
    const listId = Number(req.params.listId);

    try {
      const listToDelet = await watchListDatamapper.delete(listId);
      res.json(listToDelet);
    } catch (err) {
      errors.error500(res, err);
    }
  },
  addCompanyInWatchlist: async (req, res) => {
    try {
      const watchlistId = req.params.listId;
      const companyId = req.params.companyId;

      const watchListToFill =
        await watchlistHasCompanyDatamapper.addCompanyToWatchlist({
          companyId,
          watchlistId,
        });
      res.json(watchListToFill);
    } catch (err) {
      errors.error500(res, err);
    }
  },

  deleteCompanyFromWatchlist: async (req, res) => {
    const companyId = req.params.companyId;
    const watchlistId = req.params.watchlistId;

    try {
      const companyToDelete =
        await watchlistHasCompanyDatamapper.deleteCompanyToWatchlist({
          companyId,
          watchlistId,
        });
      res.json(companyToDelete);
    } catch (err) {
      errors.error500(res, err);
    }
  },

  findAllWatchlistOfAnInvestor: async (req, res) => {
    const investorId = req.params.investorId;

    try {
      const investorWatchList =
        await watchListDatamapper.findAllWatchlistOfAnInvestor(investorId);
      res.json(investorWatchList);
    } catch (err) {
      errors.error500(res, err);
    }
  },
};

module.exports = watchListController;
