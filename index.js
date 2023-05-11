
const express = require('express');

const calcRouter = require("./routes/calculateRouter");

const PORT = process.env.PORT || 8080;

const app = express();

app.use("/", calcRouter);

app.get('/', function (req, res) {
    res.send('Hello, World!')
})

app.listen(PORT, () => console.info(`Server is runing on ${PORT} port`));
