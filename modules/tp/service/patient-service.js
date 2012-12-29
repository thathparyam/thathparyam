var patient = require('../model/patient')
	, dao = require('../config/dao-config').getDao()
	;

module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		logger.debug('[patientservice][create] called', args);
		return dao.create(new patient());
	},

	read: function (args) {
		logger.debug('[patientservice][read] called', args);
		return dao.read(args);
	}

};

