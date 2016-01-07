var mongodb = require("mongodb");
var pinyin = require("pinyin");

var mongodbServer = new mongodb.Server("localhost", 27017, { auto_reconnect: true, poolSize: 10 });
var database = new mongodb.Db("reel", mongodbServer);
database.open(function(){
	console.log("MongoDB connected");
});

exports.database = database;
exports.generateKey = function(input){
	var wordList = pinyin(input, {
		style: pinyin.STYLE_NORMAL,
		heteronym: false
	});
	var output = "";
	wordList.forEach(function(word){
		if(word && word.length > 0 && word[0]){
			output = output + word[0];
		}
	});
	output = output.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
	return output;
}