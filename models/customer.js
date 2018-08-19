module.exports = function(sequelize, DataTypes) {

  var Customer = sequelize.define("customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1]
      }
    }
  });

  // Customer.associate = function (models) {
  //   Customer.belongsTo(models.Burger, {
  //     foreignKey: {
  //         allowNull: true
  //     }
  //   });
  // };

  return Customer;
}
