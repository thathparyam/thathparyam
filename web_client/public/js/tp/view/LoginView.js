define([
	"dojo/_base/declare", 
	"../../dijit/_Widget", 
	"../../dijit/_TemplatedMixin",	
	"../../dijit/_WidgetsInTemplateMixin",
	"../controller/AppController",
	"./BaseView",
	"dojo/text!./templates/LoginView.html",
], function (declare, _Widget, _TemplatedMixin, _WidgetsInTemplateMixin, AppController, BaseView, template) {
	return declare([_Widget, _TemplatedMixin, _WidgetsInTemplateMixin, BaseView], {
		
		templateString: template,
		
		baseClass: "loginView",
		
		init: function () {
			console.log('Login View init method called');
		},
		
		setUserName: function (newUserValue) {
			this.userinput.value = newUserValue;
		},
		
		_onSubmit: function (e) {
			AppController.renderView('container', 'layout');
		}
		
	});
});