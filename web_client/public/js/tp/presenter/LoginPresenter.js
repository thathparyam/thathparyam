define(['dojo/_base/declare', './BasePresenter'], function(declare, BasePresenter) {
	var view = '';
	
	return declare("tp.presenter.LoginPresenter", [BasePresenter], {
	
		constructor: function() {},
		
		init: function() {
			console.log('LoginPresenter init is called.');
			this.inherited(arguments);
		},
		
		createModel: function() {
			console.log('LoginPresenter createModel is called.');
			return {};
		},
		
		populateView: function() {
			console.log('LoginPresenter populateView called');
			
			// Testing the view's reaction
			this.view.setUserName('testing');
		}
	});
});