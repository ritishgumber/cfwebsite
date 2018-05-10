var express=require("express");

module.exports=function(){
var app=express();
	app.set('port', process.env.PORT || 3001);
	app.use(function(req,res,next){
			console.log("easa");
		next();
	})
	app.use(express.static('public'));
	console.log("start");

	app.engine('html', require('ejs').renderFile);

	app.get('/', function(req, res) {
		res.render("./index.html");	
	});

	app.get('/cookie',function(req,res){
		// res.cookie('cookieName',1234, { maxAge: 90000000, httpOnly: true });
		res.header('Set-Cookie','cookie-name=1234; SameSite=Lax; Domain=ngrok.io; Secure; HttpOnly')
		res.header('Access-Control-Allow-Credentials', true);	
		res.header('Access-Control-Allow-Origin',  'https://5b7dfbe8.ngrok.io');
		res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
		
		res.render("./index.html");	
	})

	app.options('/', function(req, res) {
		res.send("options");	
	});
	app.head('/', function(req, res) {
		res.send("head");	
	});


return app;

}
