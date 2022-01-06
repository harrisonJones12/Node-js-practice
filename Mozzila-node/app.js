const express = require("express");
const wiki = require("./wiki");

const app = express();
const port = 3000;

app.use("/wiki", wiki);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

//using app.all handles all request to the secret endpoint
app.all("/secret", function (req, res, next) {
  console.log("Accessing the secret section ...");
  res.send("Hello Secret World!");
  next();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
