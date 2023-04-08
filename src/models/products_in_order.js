'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products_in_order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      products_in_order.belongsTo(models.orders, { foreignKey: "orderId" });
      products_in_order.belongsTo(models.products, { foreignKey: "productId" });
    }
  }
  products_in_order.init({
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantify: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'products_in_order',
  });
  return products_in_order;
};