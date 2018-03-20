const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const userFunctions = require('../routes/users');

module.exports = (passport) => {
    passport.use(new LocalStrategy({
      usernameField: "email",
      passwordField: "password"
      }, (username, password, done) => {
       userFunctions.getUserByEmail(username, (err, user) => {
         console.log("email from passport function" + username);
        if(err) console.log("error from login");
        if(!username){
          return done(null, false, {message: 'Unknown Email adress'});
        }

        userFunctions.comparePassword(password, user.password, (err, isMatch) => {
          if(err) throw err;
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false, {message: 'Invalid password'});
          }
        });
       });
      }));

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      userFunctions.getUserById(id, (err, user) => {
        done(err, user);
      });
    });
}