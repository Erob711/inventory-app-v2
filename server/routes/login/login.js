const express = require("express");
const loginRouter = express.Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');
const config = require('../../utils/config');
const jwt = require("jsonwebtoken");

// we are not creating a new user here, but instead creating a new instance of a loggedIn user, which will have data such as JWT tokens attatched to it
loginRouter.post('/', async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where : { username : username } });
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password'
    });
  }

  const userForToken = {
    username: user.username,
    id: user.id
  };

  // add expiration to token later and handle errors related to expired token / loginSession
  // const token = jwt.sign(userForToken, config.SECRET, { expiresIn: 60*60 });
  const token = jwt.sign(userForToken, config.SECRET);

  try {
    res
      .status(200)
      .send({ token: token, username: user.username, id: user.id });
  } catch(error) {
    next(error);
  }
});

module.exports = loginRouter;