const Company = require('./company');
const User = require('./user');
const Watch_list = require('./watch_list');
const Watch_listCompany = require('./watch_listCompant');
const UserWatchlist = require('./userWatchlist');


//relation N:N many to many Company et watchlist 
Watch_list.belongsToMany(Company, {through: Watch_listCompany});
Company.belongsToMany(Watch_list, {through: Watch_listCompany});


//relation N:N many to many user et watchlist 
User.belongsToMany(Watch_list, {through: UserWatchlist});
Watch_list.belongsToMany(User, {through: UserWatchlist});