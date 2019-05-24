var express = require("express");
var htmlRoutes = require("./app/routing/htmlRoutes");

var PORT = process.env.PORT || 3000;
var app = express();

app.use("/", htmlRoutes);
app.use(express.static("app/routing"));


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });