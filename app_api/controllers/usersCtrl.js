var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongodb://localhost:27017/myscores';
var objectId = require('mongodb').ObjectId;

// module.exports.allposts = function(req,res) {
// 	console.log("all posts controller");
//
//   Mongo.connect(dbURL, function(err,db) {
//   if (err) console.error(err);
//   var collection = db.collection('post');
//   collection.find().toArray(function(err, post) {
//     if (err) console.error(err);
//
//
// res.render('index', {post});
//     db.close();
//   });
// });
// 	// res.render('index', posts);
// 	console.log("In server controller and in the home method");
//
// };
