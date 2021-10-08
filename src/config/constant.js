const path = require("path");
const dotenv = require("dotenv-safe");

dotenv.config({
  path: path.join(__dirname, "../../.env"),
  example: path.join(__dirname, "../../.env.example"),
});

module.exports = {
  clientKey: process.env.CLIENT_KEY,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoUri: process.env.MONGO_URI,
};
