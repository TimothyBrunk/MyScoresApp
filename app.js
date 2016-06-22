var Mongo = require('mongodb').MongoClient;
var dbURL = 'mongo://localhost:27017/myscores';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

var path = require('path');
app.set('views', path.join(__dirname, 'public'));
app.use(express.static(__dirname + '/public'));

app.use('/api', require('./app_api/routes/userRoutes'));

app.use(function(req,res,next){
  res.sendStatus(404);
})


app.listen(port, function(){
        console.log('listening on' + port);
    });
