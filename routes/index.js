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
	res.result.ReelPlaceArray = new Array();
	res.result.Floor = (req.params.Floor)?req.params.Floor:"";
	step(function(){
		var next = this;
		mongo.database.collection("floor", function(err, collection){
			collection.find({"Language": res.result.Language}).toArray(function(err, floors){
				if(err){
					logger.error(err);
					return res.sned(500);
				}
				// floors.forEach(function(floor){
				// 	//logger.debug(JSON.stringify(floor.Brands));
				// 	floor.Brands.sort(function(a, b){
				// 		logger.debug(a.Key + " # " + b.Key + ":" + (a.Key > b.Key));
				// 		return a.Key > b.Key;
				// 	});
				// 	//logger.debug(JSON.stringify(floor.Brands));
				// 	//logger.debug("\n");
				// });
				res.result.AreaListArray = floors;
				next();
			});
		});
	}, function(){
		var next = this;
		var topicArray = ["VisitReelPlace1", "VisitReelPlace2", "VisitReelPlace3", "VisitReelPlace4", "VisitReelPlace5", "VisitReelPlace6"];
		var getVisitReelPlaceContext = function(index){
			mongo.database.collection("fix_text", function(err, collection){
				collection.find({"Language": res.result.Language, "Topic": topicArray[index]}).toArray(function(err, place){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					if(place && place.length > 0){
						// var title = place[0].Content.substring(place[0].Content.indexOf("###Title###") + 11, place[0].Content.indexOf("###TitleEnd###"));
						// var description = place[0].Content.substring(place[0].Content.indexOf("###Description###") + 17, place[0].Content.indexOf("###DescriptionEnd###"));
						res.result.ReelPlaceArray.push({
							Key: topicArray[index],
							Content: place[0].Content
							// Title: title,
							// Description: description
						});
					}
					// logger.debug(res.result.ReelPlaceArray);
					index = index + 1;
					if(index < topicArray.length){
						getVisitReelPlaceContext(index);
					}
					else{
						// logger.debug(res.result.ReelPlaceArray);
						next();
					}
				});
			});
		};
		getVisitReelPlaceContext(0);
		
	}, function(){
		res.render("visitFloor", res.result);
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

exports.services = function(req, res){
	res.redirect("/Services/Petition");
}

exports.servicesMemberShipBook = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "MemberShipBook";
	res.render("servicesMemberShipBook", res.result);
}

exports.servicesPetition = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "Petition";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "ServicesPetition"}).toArray(function(err, servicesPetition){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(servicesPetition && servicesPetition.length > 0){
				res.result.ContentArray = servicesPetition[0].Content.split("\n");
				res.result.OriginContent = servicesPetition[0].Content;
			}
			res.render("servicesPetition", res.result);
		});
	});
}

exports.servicesBooking = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "Booking";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "ServicesBooking"}).toArray(function(err, servicesBooking){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(servicesBooking && servicesBooking.length > 0){
				res.result.Content = servicesBooking[0].Content;
			}
			res.render("servicesBooking", res.result);
		});
	});
}

exports.servicesMembership = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "Membership";
	res.render("servicesMembership", res.result);
}

exports.servicesMembershipBenefits = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "MembershipBenefits";
	res.render("servicesMembershipBenefits", res.result);
}

exports.servicesRegulations = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "Regulations";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "ServicesRegulations"}).toArray(function(err, concern){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(concern && concern.length > 0){
				res.result.ContentArray = concern[0].Content.split("\n");
				res.result.OriginContent = concern[0].Content;
			}
			res.render("servicesRegulations", res.result);
		});
	});
}

exports.servicesInStoreService = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "InStoreService";
	res.render("servicesInStoreService", res.result);
}

exports.siteMap = function(req, res){
	res.result.CurrentURL = "/SiteMap";
	res.render("siteMap", res.result);
}

exports.search = function(req, res){
	res.result.SearchResult = new Array();
	if(req.body.Search && req.body.Search.length > 3){
		console.log(req.body.Search);
		step(function(){
			var next = this;
			mongo.database.collection("news", function(err, collection){
				collection.find({"Language": res.result.Language}).toArray(function(err, news){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					news.forEach(function(newsItem){
						if(newsItem.Title.indexOf(req.body.Search) >= 0 || newsItem.Description.indexOf(req.body.Search) >= 0){
							res.result.SearchResult.push({
								Title: newsItem.Title,
								URL: "/News/" + newsItem.Key,
								ShortDescription: newsItem.Description.substr(0, 40) + "...",
							});
						}
					});
					next();
				});
			});
		}, function(){
			var next = this;
			mongo.database.collection("faq", function(err, collection){
				collection.find({"Language": res.result.Language}).toArray(function(err, faqs){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					faqs.forEach(function(faq){
						faq.QuestionList.forEach(function(question, index){
							if(question.Question.indexOf(req.body.Search) >= 0 || question.Answer.indexOf(req.body.Search) >= 0){
								res.result.SearchResult.push({
									Title: question.Question,
									URL: "/FAQ#" + faq.Title + "@" + index,
									ShortDescription: question.Answer.substr(0, 40) + "...",
								});
							}
						});
					});
					next();
				});
			});
		}, function(){
			var next = this;
			mongo.database.collection("fix_text", function(err, collection){
				collection.find({"Language": res.result.Language}).toArray(function(err, fixTexts){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					fixTexts.forEach(function(fixText){
						if(fixText.Content.indexOf(req.body.Search) >= 0){
							var result = {
								ShortDescription: fixText.Content.substr(0, 40) + "..."
							};
							switch(fixText.Topic){
								case "Privacy":
									result.Title = "私隐权利（Privacy）";
									result.URL = "/Privacy";
									break;
								case "Concern":
									result.Title = "关注我们（Follow Us）";
									result.URL = "/Concern";
									break;
								case "Contact1":
								case "Contact2":
								case "Contact3":
									result.Title = "联系我们（Contact Us）";
									result.URL = "/Contact";
									break;
								case "Recruiting":
									result.Title = "人才招聘（Recruiting）";
									result.URL = "/Recruiting";
									break;
								case "VisitAbout1":
								case "VisitAbout2":
								case "VisitAbout3":
								case "VisitAbout4":
									result.Title = "关于我们（About）";
									result.URL = "/Visit/About";
									break;
								case "VisitLocation":
									result.Title = "地理位置（Location）";
									result.URL = "/Visit/Location";
									break;
							}
							res.result.SearchResult.push(result);
						}
					});
					next();
				});
			});
		}, function(){
			var next = this;
			mongo.database.collection("brand", function(err, collection){
				collection.find({}).toArray(function(err, brands){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					brands.forEach(function(brand){
						if((brand.Title && brand.Title.indexOf(req.body.Search) >= 0) || (brand.Description_Ch && brand.Description_Ch.indexOf(req.body.Search) >= 0) || (brand.Description_En && brand.Description_En.indexOf(req.body.Search) >= 0) || (brand.Description && brand.Description.indexOf(req.body.Search) >= 0)){
							res.result.SearchResult.push({
								Title: brand.Title,
								URL: "/Brands#" + brand.Key,
								ShortDescription: brand.Description_Ch.substr(0, 40) + "...",
							});
						}
					});
					next();
				});
			});
		}, function(){
			res.result.CurrentURL = "/";
			res.render("search", res.result);
		});
		

		// mongo.database.collection("floor", function(err, collection){
		// 	collection.find({"Language": res.result.Language}).toArray(function(err, floors){
		// 		if(err){
		// 			logger.error(err);
		// 			return res.sned(500);
		// 		}
		// 		floors.forEach(function(floor){
		// 			floor.Brands.sort(function(a, b){
		// 				return a.Key > b.Key;
		// 			});
		// 		});
		// 		res.result.AreaListArray = floors;
		// 		res.render("visitFloor", res.result);
		// 	});
		// });
	}
	else{
		res.result.CurrentURL = "/";
		res.render("search", res.result);
	}
}
