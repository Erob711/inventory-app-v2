const express = require("express");
const itemsRouter = express.Router();
const { Item } = require("../../models");
const { check, validationResult } = require('express-validator');

// GET /sauce

itemsRouter.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

itemsRouter.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

itemsRouter.post("/",
  [check('name').not().isEmpty().trim().isAlphanumeric().isLength({ max: 100 }),
    check('price').not().isEmpty().trim().isNumeric(),
    check('description').not().isEmpty().trim().isLength({ max: 250 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.json({ errors : errors.array() });
    }
    else {
      try{
        const newItem = await Item.create(req.body);
        res.json(newItem);
      }
      catch(error){
        next(error);
      }
    }
  });

itemsRouter.put("/:id",
  [check('name').not().isEmpty().trim().isLength({ max: 100 }),
    check('price').not().isEmpty().trim().isNumeric(),
    check('description').not().isEmpty().trim().isLength({ max: 250 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.json({ errors : errors.array() });
    }
    else {
      try {
        const item = await Item.findByPk(req.params.id);
        const updatedItem = await item.update(req.body, { where:{ id: req.params.id } });
        res.json({ message: "updated item " + updatedItem.name });
      } catch (error) {
        next(error);
      }
    }
  });

itemsRouter.delete("/:id", async (req, res, next) => {
  try{
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.json({ message: "Deleted item with id: " + req.params.id });
  }
  catch(error){
    next(error);
  }
});

module.exports = itemsRouter;
