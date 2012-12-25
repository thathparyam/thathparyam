var doctor = require('../model/doctor');

module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		logger.debug('[doctorservice][create] called', args);
		// Create a doctor instance and insert it into DB
		return new doctor();
	},
	
	read: function (args) {
		logger.debug('[doctorservice][read] called', args);
		// Read the data from DB
		return {};
	}
};