const express = require("express");
const sumRouter = require("../controllers/sumController.js");

const calcRouter = express.Router();

calcRouter.use("/sum", sumRouter.calcSumm);

module.exports = calcRouter;

