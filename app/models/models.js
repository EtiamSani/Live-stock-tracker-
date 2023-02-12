const Company = require('./Company');
const User = require('./User');
const Watch_list = require('./Watch_list');
const Watch_listCompany = require('./Watch_listCompany');
const UserWatchlist = require('./UserWatchlist');


//relation N:N many to many Company et watchlist 
Company.belongsToMany(Watch_list, {through: Watch_listCompany});
Watch_list.belongsToMany(Company, {through: Watch_listCompany});


//relation N:N many to many user et watchlist 
User.belongsToMany(Watch_list, {through: UserWatchlist});
Watch_list.belongsToMany(User, {through: UserWatchlist});