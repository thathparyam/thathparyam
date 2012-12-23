define([], function() {
	return {
		"views": {
			"login": {
				"viewClass": "tp/view/LoginView",
				"presenterClass": "tp/presenter/LoginPresenter"
			},
			
			"list": {
				"viewClass": "tp/view/ListView",
				"presenterClass": "tp/presenter/ListPresenter"
			}
		}		
	};
});