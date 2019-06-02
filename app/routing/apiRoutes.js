var express = require('express');
var router = express.Router();
var friendsInfo = require("../data/friends.js");


router.get("/friends", function (req, res) {
  
    return res.json(friendsInfo);

});

router.post("/friends", function (req, res) {
  var newFriend = req.body;
  console.log(newFriend);
  
  
  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friendsInfo.push(newFriend);

  res.json(newFriend);
});

module.exports = router;