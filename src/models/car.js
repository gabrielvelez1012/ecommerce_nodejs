'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.hasMany(models.products_in_car, { foreignKey: "carId" });
      Car.belongsTo(models.users, { foreignKey: "userId" });
    }
  }
  Car.init({
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};