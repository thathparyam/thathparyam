module.exports = {
	create: function () {
		
	},
	
	read: function () {
		
	},
	
	getDao: function (databaseName) {
		var dbName = databaseName || appConfig.db;
		
		return require('./' + dbName + '-dao');
	}
};