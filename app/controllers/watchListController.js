const watchListDatamapper = require("../model/watchList");
const watchlistHasCompanyDatamapper = require("../model/watchListHasCompany");
const APIError = require("../service/error/APIError");

const watchListController = {
  getAll: async (_, res, next) => {
    try {
      const allLists = await watchListDatamapper.findAll();
      res.json(allLists);
    } catch (err) {
      next(
        new APIError("Erreur lors de la récupération toute les listes", 500)
      );
    }
  },
  creatList: async (req, res, next) => {
    const newWatchListData = {
      name: req.body.name,
      investor_id: req.body.investor_id,
    };

    try {
      const list = await watchListDatamapper.create(newWatchListData);
      res.json(list);
    } catch (err) {
      next(new APIError("Erreur lors de la création d'une watchlist", 500));
    }
  },
  updateList: async (req, res, next) => {
    const id = req.params.listId;

    const inputData = {
      name: req.body.name,
    };

    try {
      const updatedList = await watchListDatamapper.update({ id }, inputData);
      res.json(updatedList);
    } catch (err) {
      next(new APIError("Erreur lors de la MAJ d'un watchlist", 500));
    }
  },
  findOneListWithStocks: async (req, res, next) => {
    const listId = Number(req.params.listId);

    try {
      const list = await watchListDatamapper.findCompaniesInWatchlist(listId);
      res.json(list);
    } catch (err) {
      next(new APIError("Erreur lors de la récupération d'une watchlist", 500));
    }
  },
  deleteList: async (req, res, next) => {
    const listId = Number(req.params.listId);

    try {
      const listToDelet = await watchListDatamapper.delete(listId);
      res.json(listToDelet);
    } catch (err) {
      next(new APIError("Erreur lors de la suppression d'une watchlist", 500));
    }
  },
  deleteListWithCompanies: async (req, res, next) => {
    const listId = Number(req.params.listId);

    try {
      const listToDelet =
        await watchlistHasCompanyDatamapper.deleteWithCompanies(listId);
      res.json(listToDelet);
    } catch (err) {
      next(
        new APIError(
          "Erreur lors de la suppression d'une watchlist avec ses entreprises",
          500
        )
      );
    }
  },
  addCompanyInWatchlist: async (req, res, next) => {
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
      next(
        new APIError(
          "Erreur lors de l'ajout d'une entreprises dans une watchlist",
          500
        )
      );
    }
  },

  deleteCompanyFromWatchlist: async (req, res, next) => {
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
      next(
        new APIError(
          "Erreur lors de la suppression d'une entreprise d'une watchlist",
          500
        )
      );
    }
  },

  findAllWatchlistOfAnInvestor: async (req, res, next) => {
    const investorId = req.params.investorId;

    try {
      const investorWatchList =
        await watchListDatamapper.findAllWatchlistOfAnInvestor(investorId);
      res.json(investorWatchList);
    } catch (err) {
      next(
        new APIError(
          "Erreur lors de la récupération de tout les watchlist d'un investisseur",
          500
        )
      );
    }
  },
};

module.exports = watchListController;
