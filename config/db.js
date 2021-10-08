const mongoose = require("mongoose");
const constant = require("./constant");

async function connect() {
  await mongoose.connect(constant.mongoUri, {
    keepAlive: 1,
    useNewUrlParser: true,
    ssl: ["production"].includes(constant.env),
  });
}

module.exports = { connect };
