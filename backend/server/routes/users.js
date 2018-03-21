const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Creating a Hash Function
const hashPassword = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

// Register and creating new user route
router.get('/register', (req, res) => {
  res.json({'success': 'You are on the registration page'});
});

router.post('/register', (req, res)  => {
  const email = req.body.email;
  const password = req.body.password;
  
  if(!email) {
    return res.send({"error": "Must provide an email adress"});
  } else if(!password) {
    return res.send({"error": "Must provide an password"});
  } else {
    var newUser = new User({
      email:email,
      password: password
    });

    hashPassword(newUser, (err, user) => {
      if(err) {
        return res.json({'err': err});
      }
    });

    res.json({'success': 'You are registered and can now login'});
  }
});


// Get Login Page 
router.get('/login',  (req, res)  => {
  res.json({'success': 'You are on the login page'});
});

// Post to Login Page 
router.post('/login', (req, res, next) => {
  if (req.body.password && req.body.email) { 
    passport.authenticate('local', (err, user, info) => {
      if (err) { return next(err); }
      if (!user) { return res.send({"error": "Email/ password combination incorrect!"}); }
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        return res.send({"success": "Login Success"});
      });
    })(req, res, next);
  } else {
      return res.send({"error": "Email and Password must be provided"});
  }
});

// Lougout 
router.get('/logout', (req, res)  => {
  req.logout();
  res.json({'success': 'You are logged out'});
});

module.exports = router;