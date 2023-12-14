const express = require("express");
const usersRouter  = express.Router();
const { User, Item } = require("../../models");
// const { check, validationResult } = require('express-validator');

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:username", async (req, res, next) => {
  try {
    // const user = await User.findByPk(req.params.id);
    const user = await User.findOne({ where : { username : req.params.username } });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/cart/:id", async (req, res, next) => {
  try {
    const cart = await User.findOne({ where: { id: req.params.id }, include: Item });
    res.send(cart);
  } catch(error) {
    next(error);
  }
});

usersRouter.put("/editCart/:removeOrAdd/:userId/:itemId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    const item = await Item.findByPk(req.params.itemId);
    if(req.params.removeOrAdd === 'add') {
      await user.addItem(item);
    } else {
      await user.removeItem(item);
    }
    res.json({ message : `Editted item ${req.params.itemId} to users cart ${req.params.userId}` });
  } catch(error) {
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try{
    const newUser = await User.create(req.body);
    res.json(newUser);
  }
  catch(error){
    next(error);
  }
});

usersRouter.delete("/:id", async (req, res, next) => {
  try{
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.json({ message: "Deleted user with id: " + req.params.id });
  }
  catch(error){
    next(error);
  }
});

module.exports = usersRouter;

