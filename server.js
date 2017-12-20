var express=require("express");

module.exports=function(){
var app=express();
	app.set('port', process.env.PORT || 8888);
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

return app;

}