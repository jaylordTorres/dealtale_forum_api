const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const override = require("method-override");

const apiKey = require("../middleware/api_key");
const error = require("../middleware/error");
const routes = require("../api/v1");
const app = express();

app.use(cors());
app.use(apiKey.client);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(override());
app.use(helmet());

app.use("/api/v1", routes);
app.use(error.basic);

module.exports = app;
