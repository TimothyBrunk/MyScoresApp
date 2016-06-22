var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/myscores';
var objectId = require('mongodb').ObjectId;

module.exports.allUsers = function(req,res) {
	console.log("all posts controller");

  Mongo.connect(dbURL, function(err,db) {
  if (err) console.error(err);
  var collection = db.collection('users');
  collection.find().toArray(function(err, users) {
    if (err) console.error(err);
    console.log(users);

res.json(users);
    db.close();
  });
});
	// res.render('index', posts);
	console.log("In server controller and in the home method");

};
