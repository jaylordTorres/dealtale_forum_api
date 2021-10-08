const express = require("express");

const session = require("../../../middleware/session");
const controller = require("./controller");
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
  .post(controller.post);

router
  .route("/:id")
  //
  // doc here
  //
  .get(controller.item)

  //
  // doc here
  //
  .patch(controller.patch);

module.exports = router;
