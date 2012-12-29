define(['dojo/_base/declare', 'dojo/when', './BasePresenter', '../service/ModelService'], function(declare, when, BasePresenter, modelService) {
	
	return declare([BasePresenter], {
	
		constructor: function() {},
		
		init: function() {
			console.log('LoginPresenter init is called.');
			this.inherited(arguments);
		},
		
		populateModel: function() {
			var that = this
				, serverQuery = JSON.stringify({ username: 'test-doctor' })
				;
			console.log('LoginPresenter populateModel is called.');

			// Ajax call to show the data retrieval from server
			return when( modelService.getModel({
					serviceName: 'doctor', 
					serviceMethod: 'read', 
					serviceMethodArgs: { query: serverQuery }
				}),
				
				function (model) {
					return that.model = model;
			});
		},
		
		populateView: function() {
			var myModel = dojo.isArray(this.model) ? this.model[0] : this.model;
				
			console.log('LoginPresenter populateView called');
			
			// Testing the view's reaction
			this.view.setUserName(myModel.username);

			return this.view;
		}
	});
});