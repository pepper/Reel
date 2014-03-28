
/**
 * Module dependencies.
 */

var express = require("express");
var index = require("./routes/index");
var user = require("./routes/user");
var defaults = require("./routes/defaults");
var http = require("http");
var path = require("path");
var mongo = require("./utilities/database");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("reelsecret"));
app.use(express.session());

//Custom middleware
app.use(function(req, res, next){
	res.result = {
		CurrentURL:			"/",
		BackgroundStyle:	"Light",
		Language:			"Ch"
	};
	next();
});
app.use(function(req, res, next){
	if(req.query.language){
		res.cookie("language", req.query.language);
		res.result.Language = req.query.language;
	}
	else if(req.cookies.language){
		res.result.Language = req.cookies.language;
	}
	next();
});

app.use(app.router);
app.use(require("less-middleware")({ src: path.join(__dirname, "public") }));
app.use(express.static(path.join(__dirname, "public")));

// development only
if ("development" == app.get("env")) {
  app.use(express.errorHandler());
}

app.get("/", index.index);
app.get("/News/:Key", index.news);
app.get("/Blog", index.blog);
app.get("/Contact", index.contact);
app.get("/Concern", index.concern);
app.get("/Privacy", index.privacy);
app.get("/FAQ", index.faq);
app.get("/Visit", index.visitFloor);
app.get("/Visit/Floor", index.visitFloor);
app.get("/Visit/Location", index.visitLocation);
app.get("/Visit/About", index.visitAbout);
app.get("/Recruiting", index.recruiting);

// Default Create
app.get("/creat/news", defaults.createNews);

// app.get("/users", user.list);
// Administrator User Login
app.get("/administrator/status", function(req, res){
	res.json(req.session.administrator);
});
app.get("/administrator", express.basicAuth("pepper", "6060"), function(req, res){
	req.session.administrator = {
		login: true,
		datetime: new Date()
	}
	res.send("Login Success");
});
app.get("/administrator/logout", function(req, res){
	req.session.destroy();
	res.send("Logout");
});

http.createServer(app).listen(app.get("port"), function(){
  console.log("Express server listening on port " + app.get("port"));
});
