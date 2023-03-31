

const companyDatamapper = require("../model/company");
const watchListDatamapper = require("../model/watchList");

const errors = require('../modules/errors');
// OK
const watchListController = { 
    getAll : async (_,res) => {
        try {
        const allLists = await watchListDatamapper.findAll()
        res.json(allLists)
        }catch(err) {
            errors.error500(res, err);
        }
    },
    // OK
    creatList : async (req,res) => {
       
        const newWatchListData = {
            name : req.body.name,
            investor_id : req.body.investor_id
        }

        try {
            const list = await watchListDatamapper.create(newWatchListData);
            res.json(list)
        } catch(err) {
            errors.error500(res, err);
        }
    },
    // OK 
    updateList : async (req,res) => {
        const listId = Number(req.params.listId);
        
        const inputData = {
            name: req.body.name
          };
        
        
        
        try {
            const updatedList = await watchListDatamapper.update({ id: listId }, inputData);
            res.json(updatedList);
        } catch(err) {
            errors.error500(res, err);
        }
    },
    findOneListWithStocks : async (req,res) => {
        const listId = Number(req.params.listId);

        try {
            const list = await watchListDatamapper.findCompanyInWatchlist(listId);
            res.json(list)
        }catch(err) {
            errors.error500(res, err);
        }
    },
    deleteList : async (req,res) => { 
        const listId = Number(req.params.listId);

        try {
            const listToDelet = await watchListDatamapper.findByPk(listId);
            await listToDelet.destroy()
            res.json(listToDelet);

        }catch(err) {
            errors.error500(res, err);
        }
    },
    addCompany : async (req,res) => {
        try {
        const listId = Number(req.params.listId);
        const companyId = Number(req.body.id);
        const watchListToFill = await watchListDatamapper.findByPk(listId, {include : Company});

        if (!watchListToFill) {
            return res.status(404).json({ error: "Watch list not found" });
          }
        const CompanyToAdd = await companyDatamapper.findByPk(companyId);

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
 