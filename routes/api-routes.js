var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      res.render("index", {
        burgers: result
      });
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function() {
      res.redirect("/");
    });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update({
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
