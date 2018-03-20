const User = require('../models/user');
const bcrypt = require('bcryptjs');


// Creating a Hash
const hashPassword = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

// Query to DB for Email Adress
exports.getUserByEmail = (email, callback) => {
  const query = {email: email};
  User.findOne(query, callback);
} 

// Query to DB for ID Adress
exports.getUserById = (id, callback) => {
   User.findById(id, callback);
}

// Comparing the Password
exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash,  (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
  });
}

exports.createUser = (req, res)  => {
  const email = req.body.email;
  const password = req.body.password;

  // Validation with expressValidator
  const errors = req.validationErrors();

  if(errors){
    res.send('register',{
      errors:errors
    });
  } else {
    var newUser = new User({
      email:email,
      password: password
    });

    hashPassword(newUser, (err, user) => {
      if(err) throw err;
      console.log(user);
    });
    req.flash('success_msg', 'You are registered and can now login');
    res.redirect('/login');
  }
};

exports.logout = (req, res)  => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/login');
};

exports.login =  (req, res)  => {
  res.send('Hi from login');
};

exports.register =  (req, res) => {
  res.send('Hi fromregister');
};

exports.content = (req, res) => {
  res.send('Hi from index');
};
exports.ensureAuthenticated  = (req, res, next) =>{
  if(req.isAuthenticated()){
    return next();
  } else {
    //req.flash('error_msg','You are not logged in');
    res.redirect('/login');
  }
};