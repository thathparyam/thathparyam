var winston = require('winston')
	, allLogsConfig = {
		filename: 'logs/app.log',
		level: 'error',
		handleExceptions: true
	}
	;


module.exports = {
	initializeLogger: function () {
		
		global.logger = new winston.Logger({
			transports: [
	            // new winston.transports.Console(),
	            new winston.transports.File(allLogsConfig)
			]
		});
		
	}
};