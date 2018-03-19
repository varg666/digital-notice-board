const express = require('express');
const app = express();

app.get('/',function(req,res) {
  res.send('Hello World!');
});

const server = app.listen(4000,function() {
  console.log("Server listening on port http://localhost:4000");
});
