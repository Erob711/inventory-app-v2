const express = require("express");
const router = express.Router();

const itemsRouter = require('./item/items');
const usersRouter = require('./user/users');
const loginRouter = require('./login/login');

// different model routers
router.use('/items', itemsRouter);
router.use('/users', usersRouter);
router.use('/login', loginRouter);

module.exports = router;
