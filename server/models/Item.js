const { db, DataTypes } = require('../db');

const Item = db.define("items", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING,
  sampleSensitiveInfo: DataTypes.STRING
});

module.exports = Item;