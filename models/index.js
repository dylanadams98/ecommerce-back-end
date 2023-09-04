// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const Model = require('sequelize');
const Sequelize = require('../config/connection');


// Products belongsTo Category
class Product extends Model { }


// Categories have many Products

Product.init(
  {
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    Sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);



module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
