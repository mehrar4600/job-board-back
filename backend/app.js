require('dotenv').config();
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./middleware/headers'));
require('./routes')(app);//this redirects to the index.js file within the routes folder so all the routing is not done in this file
app.use(function(req,res,next){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res) {
  // render the error page
  res.status(err.status || 500);
  res.render('error',{
    message: err.message,
  error: (app.get('env') === 'development') ? err:{}
});
});

module.exports = app;
