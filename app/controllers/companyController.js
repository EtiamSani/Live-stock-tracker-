const companyDatamapper = require("../model/company");
const errors = require("../modules/errors");
const APIError = require("../service/error/APIError");

const companyController = {
  getAllCompany: async (_, res, next) => {
    try {
      const getAllCompanies = await companyDatamapper.findAll();
      res.json(getAllCompanies);
    } catch (err) {
      next(
        new APIError(
          "Erreur lors de la récupération de tout les entreprises",
          500
        )
      );
    }
  },
  getOneCompany: async (req, res, next) => {
    const companyId = Number(req.params.companyId);
    try {
      const oneCompany = await companyDatamapper.findByPk(companyId);

      res.json(oneCompany);
    } catch (err) {
      next(
        new APIError("Erreur lors de la récupération d'une entreprises", 500)
      );
    }
  },
  creatCompany: async (req, res, next) => {
    const companyInfo = {
      name: req.body.name,
      symbol: req.body.symbol,
      logo: req.body.logo,
      entryprice: req.body.entryprice,
    };

    try {
      const oneCompany = await companyDatamapper.create(companyInfo);
      res.json(oneCompany);
    } catch (err) {
      next(new APIError("Erreur lors de la création d'une entreprises", 500));
    }
  },
  deleteCompany: async (req, res, next) => {
    const companyId = Number(req.params.companyId);
    try {
      const deleteCompany = await companyDatamapper.delete(companyId);
      res.json(deleteCompany);
    } catch (err) {
      next(
        new APIError("Erreur lors de la suppression d'une entreprises", 500)
      );
    }
  },
  updateEntryPrice: async (req, res, next) => {
    const id = req.params.companyId;

    const entryPriceData = {
      entryprice: req.body.entryprice,
    };

    try {
      const updateEntryPrice = await companyDatamapper.update(
        { id },
        entryPriceData
      );

      res.json(updateEntryPrice);
    } catch (err) {
      next(
        new APIError(
          "Erreur lors de la MAJ du prix d'entrée d'un entreprises",
          500
        )
      );
    }
  },
  findCompanyWithSymbol: async (req, res, next) => {
    const symbol = req.params.symbol;
    try {
      const findCompanyWithSymbol = await companyDatamapper.findCompanyBySymbol(
        symbol
      );
      res.json(findCompanyWithSymbol);
    } catch (err) {
      next(
        new APIError(
          "Erreur lors de la récupération de tout les entreprises via son symbol",
          500
        )
      );
    }
  },
};

module.exports = companyController;
