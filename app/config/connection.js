var Sequelize = require("sequelize");
var keys = require("./keys.js");

var sequelize = new Sequelize(keys.connection.database, keys.connection.user, keys.connection.password, {
  host: keys.connection.host,
  dialect: "mysql",
});

module.exports = sequelize;
