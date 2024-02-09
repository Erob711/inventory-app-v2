const express = require("express");
const itemsRouter = express.Router();
const { Item } = require("../../models");
const { check, validationResult } = require('express-validator');
const { encrypt, decrypt } = require("../../utils/helperFunctions");

// JWT Authorization is complete, it just needs to implemented on the routes that need it
// The request.authroization.header is expected to both exist and be in the below format:
// Bearer <token>
// const authorize = require('../../utils/middleware/authorize');
// ex. itemsRouter.get("/", authorize, ...) {}

// Auth0 is complete as well. If you use Auth0 instead,
// protect the routes you want proteced like so
// by requiring: const { requiresAuth } = require('express-openid-connect')
// and mounting the middleware in each route like so: ('/', requiresAuth(), (req, res) => { ...

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
