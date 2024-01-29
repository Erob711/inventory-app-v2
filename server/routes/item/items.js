const express = require("express");
const itemsRouter = express.Router();
const { Item } = require("../../models");
const { check, validationResult } = require('express-validator');
const { encrypt, decrypt } = require("../../utils/helperFunctions");

// GET /sauce
itemsRouter.get("/", async (req, res, next) => {
  try {
    let items = await Item.findAll();

    // decrypts sample sensitive info
    items.forEach((item) => item.sampleSensitiveInfo = decrypt(item.sampleSensitiveInfo));

    res.send(items);
  } catch (error) {
    next(error);
  }
});

itemsRouter.get("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    item.sampleSensitiveInfo = decrypt(item.sampleSensitiveInfo);
    res.send(item);
  } catch (error) {
    next(error);
  }
});

itemsRouter.post("/",
  [check('name').not().isEmpty().trim().isLength({ max: 100 }),
    check('price').not().isEmpty().trim().isNumeric(),
    check('description').not().isEmpty().trim().isLength({ max:500 })],
  async (req, res, next) => {
    const errors = validationResult(req);

    // this just simulates our sample sensitive Info to encrypt
    const testSensitiveInfo = "Info Decrypted";
    req.body.sampleSensitiveInfo = encrypt(testSensitiveInfo);

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
    check('description').not().isEmpty().trim().isLength({ max: 500 })],
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
