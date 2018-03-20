const express = require('express');
const app = express();
const mockupJson = require("./mockup/mockup.json");
var mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const users = require('./routes/users');
const User = require('./models/user');


// Connection to DB using .env File
mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;

db.once("open", () => {
	console.log("DB Connection established");
});

db.on("error", (err) => {
	console.log(err);
});

// Using Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Using session to create a cookie using passport
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport Config
require('./config/passport')(passport);
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});


// Routes
// Main Route
app.get('/', users.ensureAuthenticated, users.content);

// Register and creating new user route
app.get('/register', users.register);
app.post('/register', users.createUser);

// Login
app.get('/login', users.login);
app.post('/login',
  passport.authenticate('local', {
  	successRedirect:'/', 
  	failureRedirect:'/login',
  	failureFlash: true}),
  (req, res) => {
  	console.log(req.body);
  	res.send("Logged in!");
  	res.redirect("/");
 });

// Lougout
app.get('/logout', users.logout);

// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
