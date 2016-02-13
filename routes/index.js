var step = require("step");
var _ = require("underscore");
var mongo = require("../utilities/database");
var logger = require("nlogger").logger(module);

exports.index = function(req, res){
	mongo.database.collection("news", function(err, collection){
		collection.find({"Language": res.result.Language}).sort({"Key": -1}).toArray(function(err, news){
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
		collection.find({"Language": res.result.Language}).sort({"Key": -1}).toArray(function(err, news){
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

exports.brandImage = function(req, res){
	mongo.database.collection("brand", function(err, collection){
		collection.find({
			"Key": req.params.Key
		}).toArray(function(err, brands){
			if(err){
				logger.error(err);
				return res.send(err);
			}
			if(brands && brands.length > 0 && brands[0].Image && brands[0].Image != ""){
				var imageBuffer = new Buffer(brands[0].Image, "base64");
				res.writeHead(200, {
					"Content-Type": "image/jpeg",
					"Content-Length": imageBuffer.length
				});
				res.end(imageBuffer);
			}
			else{
				return res.send("Image not found.");
			}
		});
	});
}

exports.foodImage = function(req, res){
	mongo.database.collection("food", function(err, collection){
		collection.find({
			"Key": req.params.Key
		}).toArray(function(err, brands){
			if(err){
				logger.error(err);
				return res.send(err);
			}
			if(brands && brands.length > 0 && brands[0].Image && brands[0].Image != ""){
				var imageBuffer = new Buffer(brands[0].Image, "base64");
				res.writeHead(200, {
					"Content-Type": "image/jpeg",
					"Content-Length": imageBuffer.length
				});
				res.end(imageBuffer);
			}
			else{
				return res.send("Image not found.");
			}
		});
	});
}

exports.restaurentImage = function(req, res){
	mongo.database.collection("restaurent", function(err, collection){
		collection.find({
			$or:[{
				"Key": req.params.Key
			}, {
				"Brand.Key": req.params.Key
			}]
		}).toArray(function(err, brands){
			if(err){
				logger.error(err);
				return res.send(err);
			}
			var found = false;
			if(brands && brands.length > 0){
				switch(brands[0].Type){
					case "vertical":
						if(brands[0].Image && brands[0].Image != ""){
							var imageBuffer = new Buffer(brands[0].Image, "base64");
							res.writeHead(200, {
								"Content-Type": "image/jpeg",
								"Content-Length": imageBuffer.length
							});
							res.end(imageBuffer);
							found = true;
						}
						break;
					case "block":
						if(brands[0].Brand && brands[0].Brand.length > 1){
							if(brands[0].Brand[0].Key == req.params.Key && brands[0].Brand[0].Image && brands[0].Brand[0].Image != ""){
								var imageBuffer = new Buffer(brands[0].Brand[0].Image, "base64");
								res.writeHead(200, {
									"Content-Type": "image/jpeg",
									"Content-Length": imageBuffer.length
								});
								res.end(imageBuffer);
								found = true;
							}
							else if(brands[0].Brand[1].Key == req.params.Key && brands[0].Brand[1].Image && brands[0].Brand[1].Image != ""){
								var imageBuffer = new Buffer(brands[0].Brand[1].Image, "base64");
								res.writeHead(200, {
									"Content-Type": "image/jpeg",
									"Content-Length": imageBuffer.length
								});
								res.end(imageBuffer);
								found = true;
							}
						}
						break;
				}
			}
			if(!found){
				res.send("Image not found.");
			}
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
				floors.forEach(function(floor){
					floor.Brands = _.sortBy(floor.Brands, function(brand){
						return brand.Title;
					});
				});
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

exports.servicesMembershipBenefits = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "MembershipBenefits";
	res.result.Topic = {};
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({
			$and:[{
				"Language": res.result.Language,
			}, {
				$or:[{
					"Topic": "ServicesMembershipBenefits_01"
				},{
					"Topic": "ServicesMembershipBenefits_02"
				},{
					"Topic": "ServicesMembershipBenefits_03"
				},{
					"Topic": "ServicesMembershipBenefits_04"
				},{
					"Topic": "ServicesMembershipBenefits_05"
				},{
					"Topic": "ServicesMembershipBenefits_06"
				},{
					"Topic": "ServicesMembershipBenefits_07"
				},{
					"Topic": "ServicesMembershipBenefits_08"
				}]
			}]
		}).toArray(function(err, servicesMembershipBenefits){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(servicesMembershipBenefits && servicesMembershipBenefits.length > 0){
				servicesMembershipBenefits.forEach(function(servicesMembershipBenefit){
					res.result.Topic[servicesMembershipBenefit.Topic] = {};
					res.result.Topic[servicesMembershipBenefit.Topic].ContentArray = servicesMembershipBenefit.Content.split("\n");
					res.result.Topic[servicesMembershipBenefit.Topic].OriginContent = servicesMembershipBenefit.Content;
				});
			}
			res.render("servicesMembershipBenefits", res.result);
		});
	});
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

exports.servicesPorterService = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "PorterService";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "ServicesPorterService"}).toArray(function(err, concern){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(concern && concern.length > 0){
				res.result.ContentArray = concern[0].Content.split("\n");
				res.result.OriginContent = concern[0].Content;
			}
			res.render("servicesPorterService", res.result);
		});
	});
}

exports.servicesReservationService = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "ReservationService";
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({"Language": res.result.Language, "Topic": "ServicesReservationService"}).toArray(function(err, concern){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(concern && concern.length > 0){
				res.result.ContentArray = concern[0].Content.split("\n");
				res.result.OriginContent = concern[0].Content;
			}
			res.render("servicesReservationService", res.result);
		});
	});
}

exports.servicesInStoreService = function(req, res){
	res.result.CurrentURL = "/Services";
	res.result.ServicesTopic = "InStoreService";
	res.result.Topic = {};
	mongo.database.collection("fix_text", function(err, collection){
		collection.find({
			$and:[{
				"Language": res.result.Language,
			}, {
				$or:[{
					"Topic": "ServicesInStoreService_01"
				},{
					"Topic": "ServicesInStoreService_02"
				},{
					"Topic": "ServicesInStoreService_03"
				},{
					"Topic": "ServicesInStoreService_04"
				},{
					"Topic": "ServicesInStoreService_05"
				}]
			}]
		}).toArray(function(err, servicesInStoreServices){
			if(err){
				logger.error(err);
				return res.sned(500);
			}
			if(servicesInStoreServices && servicesInStoreServices.length > 0){
				servicesInStoreServices.forEach(function(servicesInStoreService){
					res.result.Topic[servicesInStoreService.Topic] = {};
					res.result.Topic[servicesInStoreService.Topic].ContentArray = servicesInStoreService.Content.split("\n");
					res.result.Topic[servicesInStoreService.Topic].OriginContent = servicesInStoreService.Content;
				});
			}
			res.render("servicesInStoreService", res.result);
		});
	});
}

exports.siteMap = function(req, res){
	res.result.CurrentURL = "/SiteMap";
	res.render("siteMap", res.result);
}

exports.search = function(req, res){
	res.result.SearchResult = new Array();
	if(req.body.Search){
		var searchTextRegexp = new RegExp(req.body.Search, "i");
		step(function(){
			var next = this;
			mongo.database.collection("news", function(err, collection){
				collection.find({"Language": res.result.Language}).toArray(function(err, news){
					if(err){
						logger.error(err);
						return res.sned(500);
					}
					news.forEach(function(newsItem){
						if(searchTextRegexp.test(newsItem.Title) || searchTextRegexp.test(newsItem.Description)){
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
							if(searchTextRegexp.test(question.Question) || searchTextRegexp.test(question.Answer)){
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
						if(searchTextRegexp.test(fixText.Content)){
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
								case "ServicesPetition":
									result.Title = "申办会员卡（Membership）";
									result.URL = "/Services/Petition";
									break;
								case "ServicesMembershipBenefits_01":
								case "ServicesMembershipBenefits_02":
								case "ServicesMembershipBenefits_03":
								case "ServicesMembershipBenefits_04":
								case "ServicesMembershipBenefits_05":
								case "ServicesMembershipBenefits_06":
								case "ServicesMembershipBenefits_07":
								case "ServicesMembershipBenefits_08":
									result.Title = "会员优惠（Membership Benefits）";
									result.URL = "/Services/MembershipBenefits";
									break;
								case "ServicesRegulations":
									result.Title = "购物记录卡及会员卡管理细则（Terms of Use）";
									result.URL = "/Services/Regulations";
									break;
								case "ServicesPorterService":
									result.Title = "攜貨服務（Porter Service）";
									result.URL = "/Services/PorterService";
									break;
								case "ServicesReservationService":
									result.Title = "预订服务（Reservation Service）";
									result.URL = "/Services/ReservationService";
									break;
								case "ServicesInStoreService_01":
								case "ServicesInStoreService_02":
								case "ServicesInStoreService_03":
								case "ServicesInStoreService_04":
								case "ServicesInStoreService_05":
									result.Title = "店内服务（In-Store Service）";
									result.URL = "/Services/InStoreService";
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
						if((brand.Title && searchTextRegexp.test(brand.Title)) || (brand.Description_Ch && searchTextRegexp.test(brand.Description_Ch)) || (brand.Description_En && searchTextRegexp.test(brand.Description_En)) || (brand.Description && searchTextRegexp.test(brand.Description))){
							res.result.SearchResult.push({
								Title: brand.Title,
								URL: "/Brands#" + brand.Key,
								ShortDescription: (brand.Description_Ch)?(brand.Description_Ch.substr(0, 40) + "..."):"",
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
