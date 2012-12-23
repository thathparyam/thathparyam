define(["dojo/_base/declare", "dojo/dom-construct", "dojo/dom", "../Config"], function(declare, construct, dom, config) {
	var initialView = "login";
	
	return declare("tp.controller.AppController", [], {
		
		init: function() {
			console.log('AppController init called.');
			this.renderView(initialView);
		},
	
		renderView: function(viewName, viewArgs) {
			require([config.views[viewName].viewClass, config.views[viewName].presenterClass], function(vc, pc) {
				var v, p;
				v = new vc(viewArgs); // TODO: Introduce ViewFactory, views should be cached.
				p = new pc({ view: v });
				
				p.init();
				
				v.placeAt('container');
				
			});
		}
	});
});