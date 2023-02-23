const Watch_list = require('../models/watch_list');
const Company = require('../models/company');
const errors = require('../modules/errors');

const watchListController = { 
    getAll : async (req,res) => {
        try {
        const allLists = await Watch_list.findAll()
        res.json(allLists)
        }catch(err) {
            errors.error500(res, err);
        }
    },
    creatList : async (req,res) => {
        const name = req.body.name;

        try {
            const list = await Watch_list.create({name});
            res.json(list)
        } catch(err) {
            errors.error500(res, err);
        }
    },
    updateList : async (req,res) => {
        const listId = Number(req.params.listId);
        
        const listData = {
            name: req.body.name, 
            
        }
        
        try {
            const list = await Watch_list.findByPk(listId);
            
            await list.update(listData);
            res.json(list)
        } catch(err) {
            errors.error500(res, err);
        }
    },
    findOneListWithStocks : async (req,res) => {
        const listId = Number(req.params.listId);

        try {
            const list = await Watch_list.findByPk(listId,{
                include:  Company 
               
                
            });
            res.json(list)
        }catch(err) {
            errors.error500(res, err);
        }
    },
    deleteList : async (req,res) => { 
        const listId = Number(req.params.listId);

        try {
            const listToDelet = await Watch_list.findByPk(listId);
            await listToDelet.destroy()
            res.json(listToDelet);

        }catch(err) {
            errors.error500(res, err);
        }
    },
    addCompany : async (req,res) => {
        try {
        const listId = Number(req.params.listId);
        const companyId = Number(req.body.code_company);
        const watchListToFill = await Watch_list.findByPk(listId, {include : Company});

        if (!watchListToFill) {
            return res.status(404).json({ error: "Watch list not found" });
          }
        const CompanyToAdd = await Company.findByPk(companyId);

        if (!CompanyToAdd) {
            return res.status(404).json({ error: "Company not found" });
          }
          
        await watchListToFill.addCompany(CompanyToAdd);
        await watchListToFill.reload()
        res.json(watchListToFill)
        }catch(err) {
            errors.error500(res, err);
        }
    }

}

module.exports = watchListController
 