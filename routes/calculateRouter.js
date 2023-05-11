const express = require('express');
const sumRouter = require("./sumRouter");
const diffRouter = require("./diffRouter");
const prodRouter = require("./prodRouter");
const quotRouter = require("./quotRouter");

const calcRouter = express.Router();

calcRouter.use("/calculate", function(req, res, next){
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        res.status(400).json('Bad request, check query');
    } else {
        next()
    }
}, sumRouter, diffRouter, prodRouter, quotRouter);

module.exports = calcRouter;
