const express = require("express");
const quotRouter = require("../controllers/quotController.js");

const calcRouter = express.Router();

calcRouter.use("/quot", quotRouter.calcQuot);

module.exports = calcRouter;

