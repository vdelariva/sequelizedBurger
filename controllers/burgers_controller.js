// var express = require("express");
// var router = express.Router();
// var burger = require("../models/burger.js");
var db = require("../models");

// Routes
module.exports = function (app) {
  app.get("/", function(req, res) {
    // Get all burger data from db
    db.burger.findAll({})
    .then (function(cb){ 
      console.log(`cb: " ${JSON.stringify(cb)}`);
      res.render("index", {burgers:cb});
    });
  });

  app.post("/api/burgers", function(req, res){
    // Add new burger to db

    // burger.create(["burger_name"], [req.body.burger_name], function(data){
    db.burger.create({
      burger_name: req.body.burger_name
    }).then (function(cb) {
      res.redirect("/");
    })
  });

  app.put("/api/burgers/:id", function(req, res){
    var condition = `id: ${req.params.id}`;
    console.log(`condition: ${condition}`)

    // Update burger entry in db
    db.burger.update({devoured: req.body.devoured}, {
      where: {condition}
    }).then (function(result){
      if (result.changedRows == 0){
        return res.status(404).end();
      }
      else{
        res.status(200).end();
      }
    });
  });

  app.delete("/api/burgers/:id", function(req, res){
    var condition = `id: ${req.params.id}`;

    // Delete burger entry in db
    db.burger.destroy({
      where: {condition}
    }).then (function(result){
      if (result.affectedRows == 0){
        return res.status(404).end();
      }
      else{
        res.status(200).end();
      }
    })
  })
}
// module.exports = router;