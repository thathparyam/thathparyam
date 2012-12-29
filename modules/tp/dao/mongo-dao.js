var mongoDao;

module.exports = function () {
	
	if (mongoDao) return mongoDao;

	mongoDao = {

		init: function () {
			// inialize db connection
		}
	};

	return mongoDao;

};

