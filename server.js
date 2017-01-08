var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');


var language = require('@google-cloud/language')({
  projectId: 'foodProcessor',
  keyFilename: 'apikey/foodProcessor-16cdf8c1cfa6.json'
});

var express = require('express');
var path = require('path');
var app = express();

var allFood;
var fs = require('fs');

fs.readFile(path.normalize(__dirname + '/src/data/lorenzo.json'), function (err, data) {
  if (err) {
    throw err;
  }
  console.log(data.toString());
  allFood=JSON.parse(data.toString());
});

var port = process.env.PORT || 8080;


// Define the port to run on
app.set('port', port);

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api',function(req,res){
  res.send("{'name':'ciao'}");
})

app.get('/allfood',function(req,res){
  res.json(allFood);
})


app.post('/understand', function (req, res) {
  sentence=req.query.sentence;
  console.log(sentence);
  language.annotate(sentence, callback);

  function callback(err, entities, apiResponse) {
    if (err){
      res.send(err);
      console.log(err);
    }
    else{
      res.send(entities);
    }
  }
});

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});
