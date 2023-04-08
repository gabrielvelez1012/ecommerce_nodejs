'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.products, { foreignKey: "userId" });
      users.hasMany(models.orders, { foreignKey: "userId" });
      users.hasMany(models.car, { foreignKey: "userId" });
    }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};