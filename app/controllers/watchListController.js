const Watch_list = require('../models/watch_list');
const Company = require('../models/company');
const Watch_listCompany = require('../models/watch_listCompant')
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
    // TODO 
    findOneList : async (req,res) => {
        const listId = Number(req.params.listId);

        try {
            const list = await Watch_list.findByPk(listId,{
                include: [{ association : Company, through: Watch_listCompany }]
               
                
            });
            res.json(list)
        }catch(err) {
            errors.error500(res, err);
        }
    }

}

module.exports = watchListController
 