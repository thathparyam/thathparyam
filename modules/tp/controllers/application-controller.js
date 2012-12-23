var urlUtils = require('url')
	, serviceLocator = require('../services/service-locator')
	, applicationController	
	;

module.exports = function () {

	return {
		
		init : function () { },

		handleRequest: function (req, res) {
			service = this.getService(urlUtils.parse(req.url, true));
			res.end(service());
		},

		getService: function (urlObj) {
			var pathArray = urlObj.pathname.split('/');
			
			return serviceLocator.getService({
				serviceName: pathArray[1],
				serviceMethod: pathArray[2],
				serviceMethodArgs: urlObj.query
			});
		}
	}
	
};

