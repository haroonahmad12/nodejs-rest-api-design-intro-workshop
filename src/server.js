const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

const bookRouter = require("./routes/book-routes");
const userRouter = require("./routes/user-routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use(bookRouter);
app.use(userRouter);

module.exports = app;
