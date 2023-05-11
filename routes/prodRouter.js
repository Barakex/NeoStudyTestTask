const express = require("express");
const prodRouter = require("../controllers/prodController.js");

const calcRouter = express.Router();

calcRouter.use("/prod", prodRouter.calcProd);

module.exports = calcRouter;

