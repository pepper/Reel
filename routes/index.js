var mongo = require("../utilities/database");
var logger = require("nlogger").logger(module);

exports.index = function(req, res){
	mongo.database.collection("news", function(err, collection){
		collection.find({"Language": res.result.Language}).toArray(function(err, news){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			res.result.News = new Array();
			news.forEach(function(element, index, array){
				if(element.HeadNews){
					res.result.MainNews = element;
				}
				else{
					res.result.News.push(element);
				}
			});
			res.render("index", res.result);
		});
	});
};

exports.news = function(req, res){
	mongo.database.collection("news", function(err, collection){
		collection.find({"Language": res.result.Language}).toArray(function(err, news){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			news.some(function(element, index, array){
				if(element.Key == req.params.Key){
					res.result.CurrentURL = "/News/" + element.Key;
					res.result.ShowBottomLine = true;
					res.result.News = element;
					res.result.News.Description = res.result.News.Description.split("\n");
					return true;
				}
			});
			res.result.NewsList = new Array();
			news.forEach(function(element, index, array){
				res.result.NewsList.push({
					Key: element.Key,
					Title: element.Title,
					Date: element.Date
				});
			});
			res.render("news", res.result);
		});
	});
};

exports.blog = function(req, res){
	res.result.CurrentURL = "/Blog";
	res.render("blog", res.result);
};

exports.privacy = function(req, res){
	res.result.CurrentURL = "/Privacy";
	res.render("privacy‎", res.result);
}

exports.contact = function(req, res){
	res.result.CurrentURL = "/Contact";
	res.render("contact", res.result);
}

exports.concern = function(req, res){
	res.result.CurrentURL = "/Concern";
	res.render("concern", res.result);
}

exports.faq = function(req, res){
	res.result.CurrentURL = "/FAQ";
	mongo.database.collection("faq", function(err, collection){
		collection.find({"Language": res.result.Language}).toArray(function(err, faqs){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			res.result.QuestionCategoryArray = faqs;
			res.render("faq", res.result);
		});
	});
}

exports.visitFloor = function(req, res){
	res.result.CurrentURL = "/Visit";
	res.result.VisitTopic = "Floor";
	res.render("visitFloor", res.result);
}

exports.visitLocation = function(req, res){
	res.result.CurrentURL = "/Visit/Location";
	res.result.VisitTopic = "Location";
	res.render("visitLocation", res.result);
}

exports.visitAbout = function(req, res){
	res.result.CurrentURL = "/Visit/About";
	res.result.VisitTopic = "About";
	res.render("visitAbout", res.result);
}

exports.recruiting = function(req, res){
	res.result.CurrentURL = "/Recruiting";
	res.render("recruiting", res.result);
}
