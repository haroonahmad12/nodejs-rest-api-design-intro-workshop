const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");
const { corse } = require("corse");

const bookRouter = require("./routes/book-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());
app.use(corse());

app.use(bookRouter);

module.exports = app;
