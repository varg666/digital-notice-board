var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send('Hello World!');
});

var server = app.listen(4000,function(res, req) {
console.log(req, res)
  console.log("Server listening on port http://localhost:4000")
});
