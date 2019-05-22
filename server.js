var express = require("express");
var path = require("path");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku

var PORT = process.env.PORT || 3000;
var app = express();


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/app/public/home.html"));
});


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });