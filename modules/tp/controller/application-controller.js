var loggerConfig = require('../config/logger-config')
	, appConfig = require('../config/app-config')
	, urlUtils = require('url')
	;

module.exports = {
		
	init : function () {
		loggerConfig.init();
		logger.debug('[appcontroller][init] Logger object created.');
		
		global.appConfig = appConfig;
		global.appController = this;
		
		this.serviceLocator = require('../service/service-locator');
	},

	handleRequest: function (req, res) {
		logger.debug('[appcontroller][handleRequest] called');
		this.getService(urlUtils.parse(req.url, true))(res);
	},
	
	handleResponse: function (res, result) {
		if ( typeof result === 'object' ) 
			result = JSON.stringify(result);
		else if ( typeof result !== 'string' )
			logger.error('[appcontroller][handleResponse] Illegal result');

		res.end(result);
		
		logger.debug('[appcontroller][handleResponse] result of request: ', result);
	},

	getService: function (urlObj) {
		var pathArray = urlObj.pathname.split('/');
		
		return this.serviceLocator.getService({
			serviceName: pathArray[1],
			serviceMethod: pathArray[2],
			serviceMethodArgs: urlObj.query
		});
	}
	
};

