define(['dojo/_base/declare'], function(declare) {
	return declare("tp.view.BaseView", [], {
		presenter: {},
		
		constructor: function() {
			console.log('BaseView constructor called.');
		},
		
		/*
		init: function () {
			
		},
		*/
		
		reset: function() {
			console.log('BaseView reset method called');
		}
	});
});