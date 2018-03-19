const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mockupJson = require("./mockup/mockup.json");


app.get('/',(req,res) => {
  res.send(mockupJson);
});

app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
