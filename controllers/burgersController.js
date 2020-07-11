var express = require("express");
var burger= require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.select(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject)
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_name], function(result) {
    console.log(result);
    res.redirect("/burgers");
  });
});

router.put("/burgers/update/:id", function(req, res) {

  burger.update({
    "devoured": req.body.devoured
  }, condition, function(data) {
    console.log(data);
    res.redirect("/burgers")
  })
});

// Export routes for server.js to use.
module.exports = router;
