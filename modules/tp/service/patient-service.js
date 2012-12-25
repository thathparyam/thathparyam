var patient = require('../model/patient');

module.exports = {

	init : function () {
		
	},
	
	create: function (args) {
		return new patient();
	},

	read: function (args) {
		return {};
	}

};

