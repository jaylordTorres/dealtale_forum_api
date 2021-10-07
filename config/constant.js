const path = require('path')

require('dotenv-safe').load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example'),
})

module.exports = {
  port: process.env.PORT,
  env: process.env.NODE_ENV,
  mongo_uri: process.env.MONGO_URI
}