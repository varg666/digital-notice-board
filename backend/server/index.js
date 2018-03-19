const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mockupJson = require("./mockup/mockup.json");
const dotenv = require("dotenv").config();
const User = require("./../models/user");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");


app.use(bodyParser());
// Databade Connection
mongoose.connect(process.env.DB_URI);
const db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});


// Main Route
app.get('/',(req,res) => {
  res.send(mockupJson);
});


app.post("/register", (req, res) => {
 	const email = req.body.email;
 	const password = req.body.password;

	let newUser = new User({
      email:email,
      password:password
    });

	newUser.save((err, user) => {
		if(err) throw err;
		console.log("Inserted user");
	})
});


app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
  console.log(process.env.DB_URI);
});
