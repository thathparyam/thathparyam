var connect = require('connect')
	, app = connect()
	, controller = require('./modules/tp/controller/application-controller')
	;

/*
	1: console.log(connect.createServer());	
	2: console.log(app);
	1 & 2 are same
*/	

/*
	for static files
	index.html will be rendered for
		--> localhost:7070
		--> localhost:7070/index.html
*/

app.use("/favicon.ico", connect.static(__dirname + '/web_client/public'));

app.use("/", connect.static(__dirname + '/web_client/public'));

// appController is singleton
var appController = controller();

// next ???
// can pass arguments? if so what kind?
appController.init();

// for dynamic files
app.use(function(req, res) {
	appController.handleRequest(req, res);
	console.log();
});

app.listen(7070);