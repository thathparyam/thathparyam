var dao;

module.exports = function () {
	
	if (dao) return dao;

	dao = {
		init: function () {
			// call init of particular Dao
			// mongoDao.init
		}		
	};

	return dao;

};

