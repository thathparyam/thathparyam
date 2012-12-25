define(['dojo/_base/declare', 'dojo/when'], function(declare, when) {
	var view = '';
	
	return declare('tp.presenter.BasePresenter', [], {
		view: {},
		
		model: {},
		
		constructor: function(args) {
			var view = this.view = args.view;			
			console.log('BasePresenter init called.');
			
			if ( !view ) return;
			
			view.reset && view.reset();
			view.set('presenter', this);
		},
		
		init: function() {
			var that = this;
			
			when(this.populateModel(), function() {
				that.populateView();
			});
		},
		
		populateView: function() {
			
		},
		
		populateModel: function() {
			console.log('BasePresenter populateModel called.');
			this.model = {};
			return this.model;
		}
		
	});
});