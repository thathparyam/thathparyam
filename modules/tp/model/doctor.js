var Doctor = function (args) {
	this.username = args.username || 'test-doctor';
	this.name = args.name || '';
};

module.exports = {
	// The collection name which will be present in the database
	collectionName: 'doctor',
	
	// Monitor if model is initialized or not
	isInitialized: false,
		
	// Just call the database specific init method
	// Example: For "mongo" database call "initmongo"
	init: function (database) {
		if (this.isInitialized) return; 

		this['init' + appConfig.db] && 
		this['init' + appConfig.db](database);
		
		this.isInitialized = true;
	},
	
	// Perform database specific initialization operations related to this collection
	// Example: Setting indexes etc.
	initmongo: function (db) {
		
	},
	
	create: function (args) {
		return new Doctor(args);
	}
};