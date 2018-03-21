const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mockupJson = require("./mockup/mockup.json");


app.use(function (req, res, next) {
    // TODO restrict access to final domain
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/',(req,res,next) => {
  res.send(mockupJson);
});

app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
