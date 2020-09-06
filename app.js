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
var exampleAuth = {
  email: 'webmaster@mail.gomi.land',
  username: 'imgomi',
  password: 'passw0rd!',
};
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'pwd',
  },
  function (username, password, done) {
    if (username !== exampleAuth.email) {
      return done(null, false, {
        message: 'Incorrect username.'
      });
    } else if (password !== exampleAuth.password) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    } else {
      return done(null, exampleAuth);
    }
  }
));
app.post('/auth/login_process',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
  })
);

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
