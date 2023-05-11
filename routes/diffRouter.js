const express = require("express");
const diffRouter = require("../controllers/diffController.js");

const calcRouter = express.Router();

calcRouter.use("/diff", diffRouter.calcDiff);

module.exports = calcRouter;

