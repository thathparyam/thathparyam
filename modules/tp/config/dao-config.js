var	daos = {
	"mongo" : "../dao/mongo-dao.js",
	"couch" : "../dao/couch-dao.js"
};

var daoConfig = {
	getDao: function () {
		return require(daos[appConfig.db]);
	}
};

module.exports = daoConfig;