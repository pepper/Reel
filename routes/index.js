var step = require("step");
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
					res.result.CurrentURL = "/";
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
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "Privacy"}).toArray(function(err, privacy){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(privacy && privacy.length > 0){
				res.result.ContentArray = privacy[0].Content.split("\n");
				res.result.OriginContent = privacy[0].Content;
			}
			res.render("privacy‎", res.result);
		});
	});
}

exports.contact = function(req, res){
	res.result.CurrentURL = "/Contact";
	mongo.database.collection("fix_text", function(err, collection){
		step(function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "Contact1"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray1 = contact[0].Content.split("\n");
					res.result.OriginContent1 = contact[0].Content;
				}
				next();
			});
		}, function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "Contact2"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray2 = contact[0].Content.split("\n");
					res.result.OriginContent2 = contact[0].Content;
				}
				next();
			});
		}, function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "Contact3"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray3 = contact[0].Content.split("\n");
					res.result.OriginContent3 = contact[0].Content;
				}
				res.render("contact", res.result);
			});
		});
	});
}

exports.concern = function(req, res){
	res.result.CurrentURL = "/Concern";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "Concern"}).toArray(function(err, concern){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(concern && concern.length > 0){
				res.result.ContentArray = concern[0].Content.split("\n");
				res.result.OriginContent = concern[0].Content;
			}
			res.render("concern", res.result);
		});
	});
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

exports.brand = function(req, res){
	res.result.CurrentURL = "/Brands";
	step(function(){
		var next = this;
		mongo.database.collection("brand", function(err, collection){
			collection.find({}).toArray(function(err, brands){
				// brands.sort(function(a, b){
				// 	return a.Key > b.Key;
				// });
				res.result.Brands = brands;
				res.result.BrandCategoryArray = new Array();
				brands.forEach(function(brand){
					brand.Filter.forEach(function(filter){
						var foundCategory = res.result.BrandCategoryArray.some(function(category){
							if(category.Key == filter){
								category.Brands.push(brand.Key);
								return true;
							}
						});
						if(!foundCategory){
							res.result.BrandCategoryArray.push({
								Key: filter,
								Brands: [brand.Key]
							});
						}
					});
				});

				var letterPrefixString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
				res.result.BrandPrefix = new Array();
				letterPrefixString.split("").forEach(function(letterPrefix){
					var prefixBrand = new Array();
					brands.forEach(function(brand){
						if(brand.Key.slice(0, 1) == letterPrefix || brand.Key.slice(0, 1) == letterPrefix.toLowerCase()){
							prefixBrand.push(brand.Title);
						}
					});
					res.result.BrandPrefix.push({
						Prefix: letterPrefix,
						Brands: prefixBrand
					});
				});
				next();
			});
		});
	}, function(){
		var next = this;
		mongo.database.collection("restaurent", function(err, collection){
			collection.find({}).toArray(function(err, restaurents){
				res.result.Restaurents = restaurents;
				next();
			});
		});
	}, function(){
		mongo.database.collection("food", function(err, collection){
			collection.find({}).toArray(function(err, foods){
				res.result.Foods = foods;
				res.render("brands", res.result);
			});
		});
	});
}

exports.visitFloor = function(req, res){
	res.result.CurrentURL = "/Visit";
	res.result.VisitTopic = "Floor";
	mongo.database.collection("floor", function(err, collection){
		collection.find({"Language": res.result.Language}).toArray(function(err, floors){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			floors.forEach(function(floor){
				floor.Brands.sort(function(a, b){
					return a.Key > b.Key;
				});
			});
			res.result.AreaListArray = floors;
			res.render("visitFloor", res.result);
		});
	});
}

exports.visitLocation = function(req, res){
	res.result.CurrentURL = "/Visit/Location";
	res.result.VisitTopic = "Location";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "VisitLocation"}).toArray(function(err, visitLocation){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(visitLocation && visitLocation.length > 0){
				res.result.ContentArray = visitLocation[0].Content.split("\n");
				res.result.OriginContent = visitLocation[0].Content;
			}
			res.render("visitLocation", res.result);
		});
	});
}

exports.visitAbout = function(req, res){
	res.result.CurrentURL = "/Visit/About";
	res.result.VisitTopic = "About";
	mongo.database.collection("fix_text", function(err, collection){
		step(function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "VisitAbout1"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray1 = contact[0].Content.split("\n");
					res.result.OriginContent1 = contact[0].Content;
				}
				next();
			});
		}, function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "VisitAbout2"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray2 = contact[0].Content.split("\n");
					res.result.OriginContent2 = contact[0].Content;
				}
				next();
			});
		}, function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "VisitAbout3"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray3 = contact[0].Content.split("\n");
					res.result.OriginContent3 = contact[0].Content;
				}
				next();
			});
		}, function(){
			var next = this;
			collection.find({"Language": res.result.Language, "Topic": "VisitAbout4"}).toArray(function(err, contact){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				if(contact && contact.length > 0){
					res.result.ContentArray4 = contact[0].Content.split("\n");
					res.result.OriginContent4 = contact[0].Content;
				}
				res.render("visitAbout", res.result);
			});
		});
	});
}

exports.recruiting = function(req, res){
	res.result.CurrentURL = "/Recruiting";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "Recruiting"}).toArray(function(err, recruiting){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(recruiting && recruiting.length > 0){
				res.result.ContentArray = recruiting[0].Content.split("\n");
				res.result.OriginContent = recruiting[0].Content;
			}
			res.render("recruiting", res.result);
		});
	});
}
