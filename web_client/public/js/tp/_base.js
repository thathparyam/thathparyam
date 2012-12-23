require(['dojo/ready', 'tp/controllers/AppController'], function(ready, AppController) {
	ready(function() {
		ac = new AppController();
		ac.init();
	});
});