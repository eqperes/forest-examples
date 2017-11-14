'use strict';
const passport = require('passport');
const DummyStrategy = require('passport-dummy').Strategy;

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new DummyStrategy(done => {
    return done(null, { username: 'Erlich Bachman' });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
};

