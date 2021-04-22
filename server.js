const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world! Cloud Foudnry Node Js Demo");
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

