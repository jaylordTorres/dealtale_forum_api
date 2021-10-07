const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('../api/v1/index')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1', routes)


module.exports = app