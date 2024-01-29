const { db, DataTypes } = require('../db');

const User = db.define("users", {
  username: DataTypes.STRING,
  passwordHash: DataTypes.STRING
});

module.exports = User;