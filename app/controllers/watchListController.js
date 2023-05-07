

const companyDatamapper = require("../model/company");
const watchListDatamapper = require("../model/watchList");
const watchlistHasCompanyDatamapper = require("../model/watchListHasCompany");

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
        const id = req.params.listId;
        
        const inputData = {
            name: req.body.name
          };
        
        try {
            const updatedList = await watchListDatamapper.update({ id}, inputData);
            res.json(updatedList);
        } catch(err) {
            errors.error500(res, err);
        }
    },
    //ok
    findOneListWithStocks : async (req,res) => {
        const listId = Number(req.params.listId);

        try {
            const list = await watchListDatamapper.findCompaniesInWatchlist(listId); 
            res.json(list)
        }catch(err) {
            errors.error500(res, err);
        }
    },
    //ok
    deleteList : async (req,res) => { 
        const listId = Number(req.params.listId);

        try {
            const listToDelet = await watchListDatamapper.delete(listId);
            res.json(listToDelet);

        }catch(err) {
            errors.error500(res, err);
        }
    },
    //ok
    addCompanyInWatchlist : async (req,res) => {

        try {
            const watchlistId = req.params.listId;
            const companyId = req.params.companyId;
            // Ajoutez l'entreprise existante à la liste de surveillance ici.
            // Vous devez adapter cette partie en fonction de la structure de vos données et de vos relations de base de données.
            const watchListToFill = await watchlistHasCompanyDatamapper.addCompanyToWatchlist({companyId,watchlistId});
            res.json(watchListToFill);
          } catch (err) {
            errors.error500(res, err);
          }

}
}

module.exports = watchListController
 