var express=require("express");

module.exports=function(){
var app=express();
	app.set('port', process.env.PORT || 8003);
	app.use(function(req,res,next){
			console.log("easa");
		next();
	})
	app.use(express.static('public'));

	console.log("start");

	app.engine('html', require('ejs').renderFile);

	app.get('/we', function(req, res) {
		res.render("./index.html");	
	});
	app.get('/', function(req, res) {
		res.send("four");	
	});
	app.options('/', function(req, res) {
		res.send("options");	
	});
	app.head('/', function(req, res) {
		res.send("head");	
	});


return app;

}