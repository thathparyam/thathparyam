define(["dojo/_base/declare", 
        "dojo/_base/connect", 
        "dojo/dom-construct", 
        "dojo/dom", 
        "dijit/registry", 
        "../Config"], 
        function(
        		declare, 
        		connect, 
        		construct, 
        		dom, 
        		registry, 
        		config) {
	
	var initialView = "login";
	
	return {
		
		init: function () {
			console.log('AppController init called.');
			//this.renderView('container', initialView);
			connect.subscribe(config.topics.entityoperation, this.entityoperation);
		},

		entityoperation: function (args) {
			var viewName = args.viewName
				, viewArgs = args.viewArgs
				;
			console.log('entity operation called.', args);
			
			this.renderView(viewName, viewArgs);
		},
	
		renderView: function (viewContainer, viewName, viewArgs) {
			var that = this;
			
			require([config.views[viewName].viewClass, config.views[viewName].presenterClass], function (vc, pc) {
				var v, p;
				v = new vc(viewArgs); // TODO: Introduce ViewFactory, views should be cached.
				p = new pc({ view: v });
				
				p.init();
				
				that.drawView({ view: v, viewContainerId: viewContainer});
			});
		},
		
		drawView: function (args) {
			var view = args.view
				, viewContainerId = args.viewContainerId
				;
			
			this.destroy(viewContainerId);
			
			view.placeAt(viewContainerId);
		},
		
		destroy: function (widgetContainer) {
			registry.findWidgets(widgetContainer).forEach(function (item, index) {
				item.destroyRecursive(true);
			});
			
			construct.empty(widgetContainer);
		}
	};
});