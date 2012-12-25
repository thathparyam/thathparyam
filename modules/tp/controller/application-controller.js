var urlUtils = require('url')
	, serviceLocator = require('../service/service-locator')
	, applicationController	
	;

module.exports = function () {

	return {
		
		init : function () { },

		handleRequest: function (req, res) {
			var service = this.getService(urlUtils.parse(req.url, true))
				, result = service();
				;
			
			if ( typeof result === 'object' ) 
				result = JSON.stringify(result);
			else if ( typeof result !== 'string')
				throw Error('Illegal response');

			res.end(result);
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

