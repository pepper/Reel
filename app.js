
/**
 * Module dependencies.
 */

var express = require("express");
var index = require("./routes/index");
var backend = require("./routes/backend");
var defaults = require("./routes/defaults");
var http = require("http");
var path = require("path");
var mongo = require("./utilities/database");

var app = express();

// all environments
app.set("port", process.env.PORT || 80);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.favicon(__dirname + "/public/images/favicon.ico"));
app.use(express.logger("dev"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser("reelsecret"));
app.use(express.session());
app.use(express.bodyParser());

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
app.use(function(req, res, next){
	if(req.session && req.session.administrator && req.session.administrator.login){
		res.result.Administrator = true;
	}
	// res.result.Administrator = true;
	next();
});

app.use(app.router);
app.use(require("less-middleware")({ src: path.join(__dirname, "public") }));
app.use(express.static(path.join(__dirname, "public")));

var needAdministrator = function(req, res, next){
	if(req.session && req.session.administrator && req.session.administrator.login){
		next();
	}
	else{
		res.send(401);
	}
	// next();
}

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
app.get("/Brands", index.brand);
app.get("/Visit", index.visitFloor);
app.get("/Visit/Floor", index.visitFloor);
app.get("/Visit/Floor/:Floor", index.visitFloor);
app.get("/Visit/Location", index.visitLocation);
app.get("/Visit/About", index.visitAbout);
app.get("/Recruiting", index.recruiting);

app.get("/Services", index.services);
app.get("/Services/Petition", index.servicesPetition);
app.get("/Services/MembershipBenefits", index.servicesMembershipBenefits);
app.get("/Services/Regulations", index.servicesRegulations);
app.get("/Services/PorterService", index.servicesPorterService);
app.get("/Services/ReservationService", index.servicesReservationService);
app.get("/Services/InStoreService", index.servicesInStoreService);

//app.get("/Services/MemberShipBook", index.servicesMemberShipBook);
//app.get("/Services/Booking", index.servicesBooking);
// app.get("/Services/Membership", index.servicesMembership);

app.get("/SiteMap", index.siteMap);
app.post("/Search", index.search);

// Default Create
app.get("/creat/default", needAdministrator, defaults.createNews);

// API
app.post("/news", needAdministrator, backend.createNews);
app.post("/news/:news_key", needAdministrator, backend.editNews);
app.post("/news/:news_key/head_news", needAdministrator, backend.setHeadNews);
app.delete("/news/:news_key", needAdministrator, backend.removeNews);
app.post("/news/:news_key/image", needAdministrator, backend.addNewsImage);
app.delete("/news/:news_key/image/:image_id", needAdministrator, backend.removeNewsImage);

app.post("/faq/:title", needAdministrator, backend.createFaq);
app.delete("/faq/:title/question/:question_index", needAdministrator, backend.removeFaq);

app.post("/floor/:floor_level", needAdministrator, backend.createSection);
app.delete("/floor/:floor_level/section/:section_key", needAdministrator, backend.removeSection);

app.post("/brand", needAdministrator, backend.createBrand);
app.delete("/brand/:brand_key", needAdministrator, backend.removeBrand);

app.post("/food", needAdministrator, backend.createFood);
app.delete("/food/:brand_key", needAdministrator, backend.removeFood);

app.post("/restaurent", needAdministrator, backend.createRestaurent);
app.delete("/restaurent/:brand_key", needAdministrator, backend.removeRestaurent);

app.post("/send_contact_email", backend.sendContactEmail);

app.post("/privacy", needAdministrator, backend.editPrivacy);
app.post("/fix_text", needAdministrator, backend.editFixText);

app.post("/reel_place_image", needAdministrator, backend.changeReelPlaceImage);
app.post("/visit_about_image", needAdministrator, backend.changeVisitAboutImage);
app.post("/visit_floor_image", needAdministrator, backend.changeVisitFloorImage);

// app.get("/users", user.list);
// Administrator User Login
app.get("/administrator/status", function(req, res){
	res.json(req.session.administrator);
});
app.get("/administrator", express.basicAuth("reel", "reel"), function(req, res){
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
