module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    customer_name: {
      type: DataTypes.STRING
    },
    burger_eaten: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true
  });
  return Customer;
}
