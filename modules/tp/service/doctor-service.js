var doctor = require('../model/doctor');

module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		// Create a doctor instance and insert it into DB
		return new doctor();
	},
	
	read: function (args) {
		// Read the data from DB
		return {};
	}
};