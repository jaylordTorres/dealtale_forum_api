const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const methodOverride = require("method-override");

const error = require("../middleware/error");
const routes = require("../api/v1/index");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride());
app.use(helmet());
app.use(cors());

app.use("/api/v1", routes);

app.use(error.basic);

module.exports = app;
