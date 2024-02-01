require('dotenv').config();

const SECRET = process.env.SECRET;
const ENV = process.env.NODE_ENV;

module.exports = {
  SECRET,
  ENV
};