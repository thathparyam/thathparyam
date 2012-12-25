define(['dojo/_base/declare', './BasePresenter'], function(declare, BasePresenter) {
	var view = '';
	
	return declare("tp.presenter.LoginPresenter", [BasePresenter], {
	
		constructor: function() {},
		
		init: function() {
			console.log('LoginPresenter init is called.');
			this.inherited(arguments);
		},
		
		populateModel: function() {
			console.log('LoginPresenter populateModel is called.');

			// We will do an ajax call to server to get information.
			return this.model = {
				username: 'test-user'
			};
		},
		
		populateView: function() {
			console.log('LoginPresenter populateView called');
			
			// Testing the view's reaction
			this.view.setUserName(this.model.username);

			return this.view;
		}
	});
});