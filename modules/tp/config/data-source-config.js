var dataSource = {
	'mongo': {
		'default': {
			host: 'localhost',
			port: 27020,
			dbName: 'test_db'
		}
	},
	
	'couch': {}
};

module.exports = {
	getDataSource: function (args) {
		// args.database
		// args.dataSourceName
		
		var database = (args && args.database) || appConfig.db
			, dsName = {} 
			;
		
		if ( !dataSource[database] ) 
			throw Error("No configured datasource for choosen database: " + database);
		
		dsName = (args && args.dataSourceName) || 'default';
		
		return dataSource[database][dsName];
	}
};