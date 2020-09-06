var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var FileStore = require('session-file-store')(session);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'shinbyeongjusuperjjangjjangmanawesomeguy',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
