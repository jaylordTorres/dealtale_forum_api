const express = require('express')

const controller = require('./controller')
const router = express.Router()

router.param('id', controller.load)

router.route('/')
  .get(controller.list)
  .post(controller.post)

router.route('/:id')
  .get(controller.item)
  .patch(controller.patch)