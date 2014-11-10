var path = require("path");
var fs = require("fs");
var step = require("step");
var mongo = require("../utilities/database");
var logger = require("nlogger").logger(module);
var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: "pepper.yen@gmail.com",
		pass: "ru.4ru6au4a83"
	}
});

var basicDirPath = path.join(__dirname, "..", "public", "images", "News");
var basicBrandDirPath = path.join(__dirname, "..", "public", "brands");
var basicFoodDirPath = path.join(__dirname, "..", "public", "foods");
var basicRestaurentDirPath = path.join(__dirname, "..", "public", "restaurents");
var basicReelPlacePath = path.join(__dirname, "..", "public", "images", "Visit", "FloorGuideReelPlace");
var basicVisitAboutPath = path.join(__dirname, "..", "public", "images", "About", "IMG_About.jpg");
var basicVisitFloorPath = path.join(__dirname, "..", "public", "images", "Visit");
var monthEnglishName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var deleteFolderRecursive = function(path) {
	if( fs.existsSync(path) ) {
		fs.readdirSync(path).forEach(function(file,index){
			var curPath = path + "/" + file;
			if(fs.lstatSync(curPath).isDirectory()){
				deleteFolderRecursive(curPath);
			}
			else{
				fs.unlinkSync(curPath);
			}
		});
		fs.rmdirSync(path);
	}
};

exports.createNews = function(req, res){
	var newsDate = new Date(req.body.Year, req.body.Month, req.body.Date);
	var key = newsDate.getFullYear() + ((newsDate.getMonth() < 9)?"0":"") + (newsDate.getMonth() + 1) + ((newsDate.getDate() < 10)?"0":"") + newsDate.getDate();
	var newsPath = path.join(basicDirPath, key + "_" + req.body.Language);
	var dateString = "";
	switch(req.body.Language){
		case "Ch":
			dateString = (newsDate.getMonth() + 1) + "月" + newsDate.getDate() + "日 " + newsDate.getFullYear();
			break;
		case "En":
			dateString = monthEnglishName[newsDate.getMonth()] + " " + newsDate.getDate() + ", " + newsDate.getFullYear();
	}
	mongo.database.collection("news", function(err, collection){
		collection.insert({
			Key: key,
			Date: dateString,
			Title: req.body.Title,
			ShortDescription: req.body.ShortDescription,
			Description: req.body.Description.replace(/\r/g, ""),
			ImageQuantity: 0,
			BackgroundType:	req.body.BackgroundType,
			Language: req.body.Language
		});
	});
	step(function(){
		var next = this;
		fs.exists(newsPath, function(exist){
			if(exist){
				next();
			}
			else{
				fs.mkdir(newsPath, next);
			}
		});
	}, function(err){
		if(err){
			return logger.error(err);
		}
		fs.readFile(req.files.Sticker.path, function(err, data){
			if(err){
				return logger.error(err);
			}
			var newStickerPath = path.join(newsPath, "Sticker.png");
			fs.writeFile(newStickerPath, data, function(err){
				if(err){
					return logger.error(err);
				}
			});
		});
		fs.readFile(req.files.Selector.path, function(err, data){
			if(err){
				return logger.error(err);
			}
			var newSelectorPath = path.join(newsPath, "Selector.png");
			fs.writeFile(newSelectorPath, data, function(err){
				if(err){
					return logger.error(err);
				}
				res.redirect("/News/" + key);
			});
		});
	});
}

exports.editNews = function(req, res){
	var key = req.params.news_key;
	var language = res.result.Language;
	mongo.database.collection("news", function(err, collection){
		collection.update({
			Key: key,
			Language: language
		}, {
			$set:{
				Title: req.body.Title,
				ShortDescription: req.body.ShortDescription,
				Description: req.body.Description.replace(/\r/g, ""),
				BackgroundType:	req.body.BackgroundType
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/News/" + key);
		});
	});
}

exports.setHeadNews = function(req, res){
	var key = req.params.news_key;
	var language = res.result.Language;
	var newsPath = path.join(basicDirPath, key + "_" + language);
	mongo.database.collection("news", function(err, collection){
		collection.update({
			HeadNews: true,
			Language: language
		}, {
			$set:{
				HeadNews: false
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			collection.update({
				Key: key,
				Language: language
			}, {
				$set:{
					HeadNews: true
				}
			}, function(err){
				if(err){
					return logger.error(err);
				}
			});
		});
	});
	step(function(){
		var next = this;
		fs.exists(newsPath, function(exist){
			if(exist){
				next();
			}
			else{
				fs.mkdir(newsPath, next);
			}
		});
	}, function(err){
		if(err){
			return logger.error(err);
		}
		fs.readFile(req.files.MainSticker.path, function(err, data){
			if(err){
				return logger.error(err);
			}
			var newStickerPath = path.join(newsPath, "MainSticker.png");
			fs.writeFile(newStickerPath, data, function(err){
				if(err){
					return logger.error(err);
				}
			});
		});
		fs.readFile(req.files.HeadLine.path, function(err, data){
			if(err){
				return logger.error(err);
			}
			var newSelectorPath = path.join(newsPath, "HeadLine.png");
			fs.writeFile(newSelectorPath, data, function(err){
				if(err){
					return logger.error(err);
				}
				res.redirect("/");
			});
		});
	});
}

exports.removeNews = function(req, res){
	var key = req.params.news_key;
	var language = res.result.Language;
	mongo.database.collection("news", function(err, collection){
		collection.remove({
			Key: key,
			Language: language
		}, function(err){
			if(err){
				return logger.error(err);
			}
			deleteFolderRecursive(path.join(basicDirPath, key + "_" + language));
			res.send(200);
		});
	});
}

exports.addNewsImage = function(req, res){
	var key = req.params.news_key;
	mongo.database.collection("news", function(err, collection){
		collection.find({
			"Key": key,
			"Language": req.body.Language
		}).toArray(function(err, news){
			if(err){
				return logger.error(err);
			}
			if(news && news.length > 0){
				logger.debug(news[0]);
				var newsPath = path.join(basicDirPath, news[0].Key + "_" + req.body.Language);
				var imageFileName = ((news[0].ImageQuantity < 9)?("0"+(news[0].ImageQuantity + 1)):("" + (news[0].ImageQuantity + 1))) + ".jpg";
				collection.update({
					"Key": key,
					"Language": req.body.Language
				}, {
					$inc:{
						"ImageQuantity": 1
					}
				}, function(err){
					if(err){
						return logger.error(err);
					}
				});
				step(function(){
					var next = this;
					fs.exists(newsPath, function(exist){
						if(exist){
							next();
						}
						else{
							fs.mkdir(newsPath, next);
						}
					});
				}, function(err){
					if(err){
						return logger.error(err);
					}
					fs.readFile(req.files.Image.path, function(err, data){
						if(err){
							return logger.error(err);
						}
						var newImagePath = path.join(newsPath, imageFileName);
						fs.writeFile(newImagePath, data, function(err){
							if(err){
								return logger.error(err);
							}
							res.redirect("/News/" + key);
						});
					});
				});
			}
		});
	});
}

exports.removeNewsImage = function(req, res){
	var key = req.params.news_key;
	var language = res.result.Language;
	var basicNewsPath = path.join(basicDirPath, key + "_" + language);
	var newsImagePath = path.join(basicNewsPath, req.params.image_id + ".jpg");
	mongo.database.collection("news", function(err, collection){
		collection.update({
			"Key": key,
			"Language": language
		}, {
			$inc:{
				"ImageQuantity": -1
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			fs.unlink(newsImagePath, function(){
				logger.debug(newsImagePath);
				var renameImage = function(index){
					var oldPath = path.join(basicNewsPath, ((index < 9)?("0" + (index + 1)):((index + 1) + "") ) + ".jpg");
					logger.debug(oldPath);
					fs.exists(oldPath, function(exist){
						if(exist){
							var newPath = path.join(basicNewsPath, ((index < 10)?("0" + index):(index + "") ) + ".jpg");
							fs.rename(oldPath, newPath, function(){
								renameImage(index + 1);
							});
						}
						else{
							res.send(200);
						}
					});
				}
				renameImage(parseInt(req.params.image_id));
			});
		});
	});
}

exports.editPrivacy = function(req, res){
	mongo.database.collection("fix_text", function(err, collection){
		collection.update({
			"Topic": "Privacy",
			"Language": res.result.Language
		}, {
			$set:{
				"Content": req.body.Content
			}
		}, function(err){
			res.redirect("/Privacy");
		});
	});
}

exports.editFixText = function(req, res){
	mongo.database.collection("fix_text", function(err, collection){
		collection.update({
			"Topic": req.body.Topic,
			"Language": res.result.Language
		}, {
			$set:{
				"Content": req.body.Content
			}
		}, function(err){
			switch(req.body.Topic.replace(/[0-9]/g, "")){
				case "VisitAbout":
					res.redirect("/Visit/About");
					break;
				case "VisitLocation":
					res.send(200);
					break;
				case "VisitReelPlace":
					res.redirect("/Visit");
					break;
				case "ServicesPetition":
					res.redirect("/Services/Petition");
					break;
				case "ServicesMembershipBenefits_":
					res.redirect("/Services/MembershipBenefits");
					break;
				case "ServicesRegulations":
					res.redirect("/Services/Regulations");
					break;
				case "ServicesPorterService":
					res.redirect("/Services/PorterService");
					break;
				case "ServicesReservationService":
					res.redirect("/Services/ReservationService");
					break;
				case "ServicesInStoreService_":
					res.redirect("/Services/InStoreService");
					break;
				default:
					res.redirect("/" + req.body.Topic.replace(/[0-9]/g, ""));
					break;
			}
		});
	});
}

exports.createFaq = function(req, res){
	mongo.database.collection("faq", function(err, collection){
		collection.update({
			Title: req.params.title,
			Language: res.result.Language
		}, {
			$push:{
				QuestionList:{
					Question: req.body.Question,
					Answer: req.body.Answer
				}
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/FAQ");
		});
	});
}

exports.removeFaq = function(req, res){
	mongo.database.collection("faq", function(err, collection){
		collection.find({
			Title: req.params.title,
			Language: res.result.Language
		}).toArray(function(err, faq){
			if(faq && faq.length > 0){
				faq[0].QuestionList.splice(req.params.question_index, 1);
				logger.debug(req.params.title);
				logger.debug(req.params.question_index);
				logger.debug(faq[0].QuestionList);
				collection.update({
					Title: req.params.title,
					Language: res.result.Language
				}, {
					$set:{
						QuestionList: faq[0].QuestionList
					}
				}, function(err){
					if(err){
						return logger.error(err);
					}
					res.send(200);
				});
			}
		});
	});
}

exports.createSection = function(req, res){
	mongo.database.collection("floor", function(err, collection){
		collection.update({
			Floor: req.params.floor_level,
			Language: res.result.Language
		}, {
			$push:{
				Brands:{
					Key: req.body.Key,
					Title: req.body.Title
				}
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Visit/Floor");
		});
	});
}

exports.removeSection = function(req, res){
	mongo.database.collection("floor", function(err, collection){
		collection.update({
			Floor: req.params.floor_level,
			Language: res.result.Language
		}, {
			$pull:{
				Brands:{
					Key: req.params.section_key
				}
			}
		}, function(err){
			if(err){
				return logger.error(err);
			}
			res.send(200);
		});
	});
}

exports.createBrand = function(req, res){
	var key = req.body.Title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
	// if(key == ""){
	// 	key = uuid
	// }
	var filter = new Array();
	if(req.body.Women){
		filter.push("Women");
	}
	if(req.body.Man){
		filter.push("Man");
	}
	if(req.body.Underwear){
		filter.push("Underwear");
	}
	if(req.body.Accessory){
		filter.push("Accessory");
	}
	if(req.body.Kids){
		filter.push("Kids");
	}
	if(req.body.Beauty){
		filter.push("Beauty");
	}
	if(req.body.Living){
		filter.push("Living");
	}
	mongo.database.collection("brand", function(err, collection){
		collection.insert({
			Key: key,
			Title: req.body.Title,
			Description_Ch: req.body.Description_Ch,
			Description_En: req.body.Description_En,
			Phone: req.body.Phone,
			BusinessHours: req.body.BusinessHours,
			Url: req.body.Url,
			Floor: req.body.Floor,
			Filter: filter
		});
	});
	fs.readFile(req.files.Image.path, function(err, data){
		if(err){
			return logger.error(err);
		}
		var newStickerPath = path.join(basicBrandDirPath, key + ".jpg");
		fs.writeFile(newStickerPath, data, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Brands");
		});
	});
}

exports.removeBrand = function(req, res){
	var key = req.params.brand_key;
	var language = res.result.Language;
	mongo.database.collection("brand", function(err, collection){
		collection.remove({
			Key: key
		}, function(err){
			if(err){
				return logger.error(err);
			}
			fs.unlink(path.join(basicBrandDirPath, key + ".jpg"), function(){
				res.send(200);
			});
		});
	});
}

exports.createFood = function(req, res){
	var key = req.body.Title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
	mongo.database.collection("food", function(err, collection){
		collection.insert({
			Key: key,
			Title: req.body.Title,
			Description_Ch: req.body.Description_Ch,
			Description_En: req.body.Description_En,
			Phone: req.body.Phone,
			BusinessHours: req.body.BusinessHours,
			Url: req.body.Url,
			Floor: req.body.Floor,
		});
	});
	fs.readFile(req.files.Image.path, function(err, data){
		if(err){
			return logger.error(err);
		}
		var newStickerPath = path.join(basicFoodDirPath, key + ".jpg");
		fs.writeFile(newStickerPath, data, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Brands");
		});
	});
}

exports.removeFood = function(req, res){
	var key = req.params.brand_key;
	var language = res.result.Language;
	mongo.database.collection("food", function(err, collection){
		collection.remove({
			Key: key
		}, function(err){
			if(err){
				return logger.error(err);
			}
			fs.unlink(path.join(basicBrandDirPath, key + ".jpg"), function(){
				res.send(200);
			});
		});
	});
}

exports.createRestaurent = function(req, res){
	switch(req.body.Type){
		case "vertical":
			var key = req.body.Title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
			mongo.database.collection("restaurent", function(err, collection){
				collection.insert({
					Type: req.body.Type,
					Key: key,
					Title: req.body.Title,
					Description_Ch: req.body.Description_Ch,
					Description_En: req.body.Description_En,
					Phone: req.body.Phone,
					BusinessHours: req.body.BusinessHours,
					Url: req.body.Url,
					Style: req.body.Style,
				});
			});
			fs.readFile(req.files.Image.path, function(err, data){
				if(err){
					return logger.error(err);
				}
				var newStickerPath = path.join(basicRestaurentDirPath, key + ".jpg");
				fs.writeFile(newStickerPath, data, function(err){
					if(err){
						return logger.error(err);
					}
					res.redirect("/Brands");
				});
			});
			break;
		case "block":
			var brand1Key = req.body.Brand1_Title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
			var brand2Key = req.body.Brand2_Title.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
			
			mongo.database.collection("restaurent", function(err, collection){
				collection.insert({
					Type: req.body.Type,
					Key: brand1Key + brand2Key,
					Brand:[{
						Key: brand1Key,
						Title: req.body.Brand1_Title,
						Description_Ch: req.body.Brand1_Description_Ch,
						Description_En: req.body.Brand1_Description_En,
						Phone: req.body.Brand1_Phone,
						BusinessHours: req.body.Brand1_BusinessHours,
						Url: req.body.Brand1_Url,
						Style: req.body.Brand1_Style,
					},{
						Key: brand2Key,
						Title: req.body.Brand2_Title,
						Description_Ch: req.body.Brand2_Description_Ch,
						Description_En: req.body.Brand2_Description_En,
						Phone: req.body.Brand2_Phone,
						BusinessHours: req.body.Brand2_BusinessHours,
						Url: req.body.Brand2_Url,
						Style: req.body.Brand2_Style,
					}]
				});
			});
			fs.readFile(req.files.Brand1_Image.path, function(err, data){
				if(err){
					return logger.error(err);
				}
				var newStickerPath = path.join(basicRestaurentDirPath, brand1Key + ".jpg");
				fs.writeFile(newStickerPath, data, function(err){
					if(err){
						return logger.error(err);
					}
					fs.readFile(req.files.Brand2_Image.path, function(err, data){
						if(err){
							return logger.error(err);
						}
						var newStickerPath = path.join(basicRestaurentDirPath, brand2Key + ".jpg");
						fs.writeFile(newStickerPath, data, function(err){
							if(err){
								return logger.error(err);
							}
							res.redirect("/Brands");
						});
					});
				});
			});
			break;
	}
}

exports.removeRestaurent = function(req, res){
	var key = req.params.brand_key;
	var language = res.result.Language;
	mongo.database.collection("restaurent", function(err, collection){
		collection.remove({
			Key: key
		}, function(err){
			if(err){
				return logger.error(err);
			}
			fs.unlink(path.join(basicRestaurentDirPath, key + ".jpg"), function(){
				res.send(200);
			});
		});
	});
}

exports.changeReelPlaceImage = function(req, res){
	var targetPath = "";
	switch(req.body.Topic){
		case "VisitReelPlace1":
			targetPath = path.join(basicReelPlacePath, "IMGS01.jpg");
			break;
		case "VisitReelPlace2":
			targetPath = path.join(basicReelPlacePath, "IMGS02.jpg");
			break;
		case "VisitReelPlace3":
			targetPath = path.join(basicReelPlacePath, "IMGS03.jpg");
			break;
		case "VisitReelPlace4":
			targetPath = path.join(basicReelPlacePath, "IMGS04.jpg");
			break;
		case "VisitReelPlace5":
			targetPath = path.join(basicReelPlacePath, "IMGS05.jpg");
			break;
		case "VisitReelPlace6":
			targetPath = path.join(basicReelPlacePath, "IMGS06.jpg");
			break;
	}
	fs.readFile(req.files.Image.path, function(err, data){
		if(err){
			return logger.error(err);
		}
		fs.writeFile(targetPath, data, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Visit");
		});
	});
}

exports.changeVisitAboutImage = function(req, res){
	fs.readFile(req.files.Image.path, function(err, data){
		if(err){
			return logger.error(err);
		}
		fs.writeFile(basicVisitAboutPath, data, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Visit/About");
		});
	});
}

exports.changeVisitFloorImage = function(req, res){
	fs.readFile(req.files.Image.path, function(err, data){
		if(err){
			return logger.error(err);
		}
		fs.writeFile(path.join(basicVisitFloorPath, "FloorPlan" + req.body.Floor + ".jpg"), data, function(err){
			if(err){
				return logger.error(err);
			}
			res.redirect("/Visit");
		});
	});
}

exports.sendContactEmail = function(req, res){
	var text = "Company:" + req.body.company + "\nName:" + req.body.name + "\nEmail:" + req.body.email + "\nPhone:" + req.body.phone + "\nDescription:" + req.body.description;
	var html = "Company:" + req.body.company + "<br />Name:" + req.body.name + "<br />Email:" + req.body.email + "<br />Phone:" + req.body.phone + "<br />Description:" + req.body.description;
	var mailOptions = {
		from: "Reel Service<reelshanghai@gmail.com>",
		to: "reelshanghai@gmail.com",
		subject: "WebContactUs from " + req.body.company + " " + req.body.name,
		text: text,
		html: html
	};
	smtpTransport.sendMail(mailOptions, function(error, response){
		if(error){
			logger.error(error);
			return res.json(500, {
				error: error
			});
		}
		res.json(200, {
			message: "Send OK"
		});
	});
}