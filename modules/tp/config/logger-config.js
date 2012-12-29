var winston = require('winston')
	, allLogsConfig = {
		filename: 'logs/app.log',
		level: 'info',
		handleExceptions: true
	}
	;


module.exports = {
	init: function () {
		
		global.logger = new winston.Logger({
			transports: [
	            // new winston.transports.Console(),
	            new winston.transports.File(allLogsConfig)
			]
		});
		
	}
};