const Watch_list = require('../models/watch_list');
const Company = require('../models/company');

const watchListController = { 
    getAll : async (req,res) => {
        const allLists = await Watch_list.findAll()
        res.json(allLists)
    },
}

module.exports = watchListController
 