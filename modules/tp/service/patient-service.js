var patient = require('../model/patient');

module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		logger.debug('[patientservice][create] called', args);
		return new patient();
	},

	read: function (args) {
		logger.debug('[patientservice][read] called', args);
		return {};
	}

};

