const express = require("express");

const session = require("../../../middleware/session");
const controller = require("./controller");
const validator = require("./validation");
const router = express.Router();

router.use(session.required);

router.param("id", controller.load);

router
  .route("/")
  //
  // doc here
  //
  .get(controller.list)

  //
  // doc here
  //
  .post(validator.post, controller.post);

router
  .route("/:id")
  //
  // doc here
  //
  .get(validator.id, controller.item)

  //
  // doc here
  //
  .patch(validator.id, validator.patch, controller.patch);

module.exports = router;
