const express = require('express');
const app = express();
const mockupJson = require("./mockup/mockup.json");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

// Using Body Parser
app.use(bodyParser());

// Connection to DB using .env File
mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;
 console.log(process.env.DB_URI);
db.once("open", () => {
	console.log("DB Connection esthablised");
});

db.on("error", (errr) => {
	console.log(err);
})

// Main Route
app.get('/',(req,res) => {
  res.send(mockupJson);
});


// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
