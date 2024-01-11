const { db, DataTypes } = require('../db');
const Item = db.define("item", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  description: DataTypes.STRING,
  category: DataTypes.STRING,
  image: DataTypes.STRING
},
{
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false
});



module.exports = Item;