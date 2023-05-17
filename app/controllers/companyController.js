const companyDatamapper = require("../model/company");
const errors = require('../modules/errors');


const companyController = { 

    getAllCompany : async (_,res) => {
        
        try {
            const getAllCompanies = await companyDatamapper.findAll()
            res.json(getAllCompanies)
            
            }catch(err) {
                errors.error500(res, err);
            }
    },
    getOneCompany : async (req,res) => {
        const companyId = Number(req.params.companyId);
        try {
            const oneCompany = await companyDatamapper.findByPk(companyId)

            res.json(oneCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    creatCompany : async (req,res) => {

        const companyInfo = {
        
        name : req.body.name,
        symbol : req.body.symbol,
        entryprice : req.body.entryprice,
        
        }

        console.log(companyInfo)
        
        try {
            const oneCompany = await companyDatamapper.create(companyInfo)
            res.json(oneCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    deleteCompany :  async (req,res) => {
        const companyId = Number(req.params.companyId);
        try {
            const deleteCompany = await companyDatamapper.delete(companyId)
            res.json(deleteCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    updateEntryPrice : async (req,res) => {
        const id = req.params.companyId;
       
        const entryPriceData = {
            entryprice: req.body.entryprice, 
        
        }
        console.log(entryPriceData)
        try {
            const updateEntryPrice = await companyDatamapper.update({id}, entryPriceData);
            console.log(updateEntryPrice)
            res.json(updateEntryPrice)
        } catch(err) {
            errors.error500(res, err);
        }
    },
    findCompanyWithSymbol : async (req,res) => { 
        
        const symbol = req.params.symbol   
        const findCompanyWithSymbol = await companyDatamapper.findCompanyBySymbol(symbol)
        res.json(findCompanyWithSymbol)
    }
}

module.exports = companyController