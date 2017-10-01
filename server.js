var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");
var db = require("./models");

var app = express();
var port = process.env.PORT || 3000;

// app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
db.sequelize.sync();

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
