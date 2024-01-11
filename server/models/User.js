const { db, DataTypes } = require('../db');

const User = db.define("user", {
  username: DataTypes.STRING,
  password: DataTypes.STRING
},
{
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false
});

module.exports = User;