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
        console.log(listId)
        const listData = {
            name: req.body.name, 
            
        }
        console.log(listData)
        try {
            const list = await Watch_list.findByPk(listId);
            console.log(listData)
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
        const listId = Number(req.params.listId);
        const companyId = Number(req.body.code_company);

        const watchListToFill = await Watch_list.findByPk(listId, {include : Company});
        const CompanyToAdd = await Company.findByPk(companyId);
        await watchListToFill.addCompany(CompanyToAdd);
        await watchListToFill.reload()
        res.json(watchListToFill)
    }

}

module.exports = watchListController
 