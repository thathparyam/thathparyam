var mongojs = require('mongojs')
	, dao = require('./dao.js') 
	, dsConfig = require('../config/data-source-config.js').getDataSource()
	;
	
// TODO: How to set prototype of an object ?
// 		 If we use Object.create then the properties have to be another object.
//		 Is there any shortcut ?
//module.exports = Object.create(dao, {

module.exports = {
	db: {},
	
	// Monitor if model is initialized or not
	isInitialized: false,
	
	init: function () {
		if (this.isInitialized) return;
		
		//this.db = mongojs({db: dsConfig.dbName, replSet: {}});
		this.db = mongojs({ db: dsConfig.dbName });
		this.isInitialized = true;
	},
	
	create: function (args) {
		// args.modelName
		// args.params
		// args.response
		
		var that = this
			, modelModule = this._getModelModule(args.modelName)
			, model = modelModule.create(args.params)
			;

		this.db.collection(modelModule.collectionName).save(model, function (err, result) {
			if (err) that.onError(err);
			appController.handleResponse(args.response, result);
		});
	},
	
	read: function (args) {
		// args.modelName
		// args.params
		// args.response
		
		var that = this
			, modelModule = this._getModelModule(args.modelName)
			;

		this.db.collection(modelModule.collectionName).find(JSON.parse(args.params.query), function (err, result) {
			if (err) that.onError(err);
			appController.handleResponse(args.response, result);
		});
	},
	
	onError: function (err) {
		logger.error('Something screwed up in MongoDB: ', err);
	},
	
	_getModelModule: function (modelModuleName) {
		var modelModule = require('../model/' + modelModuleName);
		
		this.init();
		modelModule.init(this.db);
		
		return modelModule;
	}
};
	
