define([
	"dojo/_base/declare", 
	"../../dijit/_Widget", 
	"../../dijit/_TemplatedMixin",	
	"../../dijit/_WidgetsInTemplateMixin",
	"./BaseView",
	"dojo/text!./templates/LoginView.html",
], function(declare, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BaseView, template) {
	return declare("tp.view.LoginView", [_Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BaseView], {
		
		templateString: template,
		
		baseClass: "loginView",
		
		init: function() {
			console.log('Login View init method called');
		},
		
		setUserName: function(newUserValue) {
			this.userinput.value = newUserValue;
		}
		
	});
});