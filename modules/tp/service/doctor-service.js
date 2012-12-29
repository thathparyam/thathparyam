var doctor = require('../model/doctor')
	, dao = require('../dao/dao').getDao()
	;


module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		// args.params
		// args.response
		
		logger.debug('[doctorservice][create] called');
		// Create a doctor instance and insert it into DB
		return dao.create({ modelName: 'doctor', params: args.params, response: args.response });
	},
	
	read: function (args) {
		// args.params
		// args.response

		logger.debug('[doctorservice][read] called');
		// Read the data from DB
		return dao.read({ modelName: 'doctor', params: args.params, response: args.response });
	}
};