const path = require("path");
const dotenv = require("dotenv-safe");

dotenv.config({
  path: path.join(__dirname, "../.env"),
  example: path.join(__dirname, "../.env.example"),
});

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  mongoUri: process.env.MONGO_URI,
  clientKey: process.env.CLIENT_KEY
};
