var connect = require('connect')
	, app = connect()
	, appController = require('./modules/tp/controller/application-controller')
	, fs = require('fs')
	;

/*
	for static files
	index.html will be rendered for
		--> localhost:7070
		--> localhost:7070/index.html
*/

app.use("/favicon.ico", connect.static(__dirname + '/web_client/public'));

app.use("/index.html", connect.static(__dirname + '/web_client/public'));

app.use("/", connect.static(__dirname + '/web_client/public'));

//app.use(connect.session({ secret: 'keyboard cat', key: 'sid', cookie: { secure: true }}));

// next ???
// can pass arguments? if so what kind?
appController.init();

app.use("/layout", function (req, res) {
	// Only Authenticated users will see Layout

	// Call Authenticate function
	var isValidUser = true;

	if ( !isValidUser ) {
		res.end();
		return;
	}

	// On Authentication success show up the Layout
	fs.readFile('web_client/public/layout.html', function (err, data) {
		res.writeHead(200, {
			'Content-Type': 'text/html',
			'Content-length': data.length
		});
		res.write(data);
		res.end();
	});
});

// for dynamic files
app.use(function (req, res) {
	appController.handleRequest(req, res);
});

app.listen(7070);
