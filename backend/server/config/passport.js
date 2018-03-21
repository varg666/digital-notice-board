const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const userFunctions = require('../routes/users');

// Comparing the Password
const comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash,  (err, isMatch) => {
      if(err) res.send(err);
      callback(null, isMatch);
  });
}

module.exports = (passport) => {
    passport.use(new LocalStrategy({
      usernameField: "email",
      passwordField: "password"
      }, (username, password, done) => {
        const query = {email: username};
        User.findOne(query, function(err, user) {
          if (err) throw err;
          if(!user) {
              return done(null, false, {message: "Email Not Found"})
        }  
        // Match Password 
        comparePassword(password, user.password, (err, isMatch) => {
          if(err) { return done(err)}
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false, {message: 'Invalid password'});
          }
        });
       });
      }));

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
        done(err, user);
      });
    });
}