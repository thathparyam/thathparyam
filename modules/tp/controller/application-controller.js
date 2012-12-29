var urlUtils = require('url')
	, serviceLocator = require('../service/service-locator')
	, loggerConfig = require('../config/logger-config')
	, applicationController	
	, myLogger
	;

module.exports = function () {

	return {
		
		init : function () {
			loggerConfig.initializeLogger();
			logger.debug('[appcontroller][init] Logger object created.');
		},

		handleRequest: function (req, res) {
			var service = this.getService(urlUtils.parse(req.url, true))
				, result = service();
				;
			
			if ( typeof result === 'object' ) 
				result = JSON.stringify(result);
			else if ( typeof result !== 'string' )
				throw Error('Illegal response');

			res.end(result);
			
			logger.debug('[appcontroller][handleRequest] result of request: ', result);
		},

		getService: function (urlObj) {
			var pathArray = urlObj.pathname.split('/');
			
			return serviceLocator.getService({
				serviceName: pathArray[1],
				serviceMethod: pathArray[2],
				serviceMethodArgs: urlObj.query
			});
		}
	};
	
};

