var Burger = require("../models/burger.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    Burger.findAll({}).then(function(result) {
      res.render("index", {
        burgers: result
      });
    });
  });

  app.post("/", function(req, res) {
    Burger.create({
      burger_name: req.body.burger_name
    }).then(function() {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/");
    });
  });
};
