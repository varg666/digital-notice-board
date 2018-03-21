const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/register', (req, res)  => {
  const email = req.body.email;
  const password = req.body.password;
  
  if(!email) {
    return res.send({"error": "Must provide an email adress"});
  } else if(!password) {
    return res.send({"error": "Must provide an password"});
  } else {
    const newUser = new User({
      email: email,
      password: password
    });

    bcrypt.genSalt(10, function(err, salt){
      bcrypt.hash(newUser.password, salt, function(err, hash){
        if(err){
          console.log(err);
        }
        newUser.password = hash;
        newUser.save(function(err){
          if(err){
            res.send(err);
            return;
          } else {
            res.json({'success': 'You are registered and can now login'});
          }
        });
      });
    });
  }
});

// Post to Login Page 
router.post('/login', (req, res, next) => {
  if (req.body.password && req.body.email) {
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (info["error"]) { return res.send(info)}

      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return res.send({"success": "Login Success"});
      });
    })(req, res, next);
  } else {
      return res.send({"error": "Email and Password must be provided"});
  }
});

// Reset Password 
router.post('/resets', (req, res)  => {
  //
});

// Lougout 
router.get('/logout', (req, res)  => {
  req.logout();
  res.json({'success': 'You are logged out'});
});

module.exports = router;