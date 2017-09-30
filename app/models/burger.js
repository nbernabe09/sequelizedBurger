var Sequelize = require("sequelize");
var db = require("../config/connection.js");

var Burger = db.define("burger", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    burger_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    devoured: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    // },
    // createdAt: {
    //   type: Sequelize.DATE,
    //   defaultValue: Sequelize.NOW
    }
  }, {
    timestamps: true
});

Burger.sync();

module.exports = Burger;
