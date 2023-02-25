const Watch_list = require('../models/watch_list');
const Company = require('../models/company');
const Watch_listCompany = require('../models/watch_listCompant')
const errors = require('../modules/errors');


const companyController = { 
    getAllCompany : async (req,res) => {
        
        try {
            const allCompanies = await Company.findAll({
                include:  Watch_list
            })
            res.json(allCompanies)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    getOneCompany : async (req,res) => {
        const companyId = Number(req.params.companyId);
        try {
            const oneCompany = await Company.findByPk(companyId,{
                include:  Watch_list
            })
            res.json(oneCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    creatCompany : async (req,res) => {
        const code_company = req.body.code_company;
        const name = req.body.name
        const symbol = req.body.symbol
        const entry_price = req.body.entry_price
        const logo = req.body.logo
        
        try {
            const oneCompany = await Company.create({name, symbol, entry_price, logo, code_company })
            res.json(oneCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    deleteCompany :  async (req,res) => {
        const companyId = Number(req.params.companyId);
        try {
            const deleteCompany = await Company.findByPk(companyId,{
                include:  Watch_list
            })
            await deleteCompany.destroy()
            res.json(deleteCompany)
            }catch(err) {
                errors.error500(res, err);
            }
    },
    updateEntryPrice : async (req,res) => {
        const companyId = Number(req.params.companyId);
       
        const enteryPriceData = {
            entry_price: req.body.entry_price, 
            symbol : req.body.symbol
            
        }
        try {
            const entryPrice = await Company.findByPk(companyId);
            
            await entryPrice.update(enteryPriceData);
            res.json(entryPrice)
        } catch(err) {
            errors.error500(res, err);
        }
    },
    findCompanyWithSymbol : async (req,res) => {
        
        const symbol = req.params.symbol   
        console.log(symbol)
        
        const findCompanyWithSymbol = await Company.findOne({ where: { symbol: symbol } })
        res.json(findCompanyWithSymbol)
    }
}

module.exports = companyController