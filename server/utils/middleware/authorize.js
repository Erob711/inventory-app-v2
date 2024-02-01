const jwt = require("jsonwebtoken");
const config = require('../../utils/config');

async function authorize(req, res, next) {
  // this assumes that the incoming request will have an authorization header
  // this does not happen automatically or through jwt - jwt only creates a token
  // you need to either have the client create and attach this specific header or do it manually on postman in the meantime
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // extracts jwt token alone
  const accessToken = authHeader.split(' ')[1];

  try {
    req.user = jwt.verify(accessToken, config.SECRET);
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
}

module.exports = authorize;