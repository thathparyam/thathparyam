module.exports = function () {
	
	return {

		init : function () {
			
		},
		
		create: function (args) {
			return 'Doctor CREATE Service called with args: ' + args;
		},
		
		read: function (args) {
			return 'Doctor READ Service called with args: ' + args;
		}
	};

}();

