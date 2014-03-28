var mongodb = require("mongodb");

var mongodbServer = new mongodb.Server("localhost", 27017, { auto_reconnect: true, poolSize: 10 });
var database = new mongodb.Db("reel", mongodbServer);
database.open(function(){
	console.log("MongoDB connected");
});

exports.database = database;