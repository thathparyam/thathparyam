define(['dojo/_base/declare', 'dojo/when', './BasePresenter', '../service/ModelService'], function(declare, when, BasePresenter, modelService) {
	
	return declare([BasePresenter], {
	
		constructor: function() {},
		
		init: function() {
			console.log('LoginPresenter init is called.');
			this.inherited(arguments);
		},
		
		populateModel: function() {
			var that = this;
			console.log('LoginPresenter populateModel is called.');

			// Ajax call to show the data retrieval from server
			return when(modelService.getModel({ serviceName: 'doctor', serviceMethod: 'create', serviceMethodArgs: { test: 'val' } }), function (model) {
				return that.model = model;
			});
		},
		
		populateView: function() {
			console.log('LoginPresenter populateView called');
			
			// Testing the view's reaction
			this.view.setUserName(this.model.username);

			return this.view;
		}
	});
});