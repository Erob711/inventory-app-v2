require('dotenv').config();

const SECRET = process.env.SECRET;
const ENV = process.env.NODE_ENV;
const CLIENT_ID = process.env.CLIENT_ID;
const ISSUER_BASE_URL = process.env.ISSUER_BASE_URL;

module.exports = {
  SECRET,
  ENV,
  CLIENT_ID,
  ISSUER_BASE_URL
};