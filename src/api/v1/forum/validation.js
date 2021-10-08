const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

module.exports = {
  id: validator.params(Joi.object({ id: Joi.string().required() })),
  post: validator.body(
    Joi.object({
      title: Joi.string().required().min(5),
      content: Joi.string().required().min(5),
    })
  ),
  patch: validator.body(
    Joi.object({
      title: Joi.string().min(5),
      content: Joi.string().min(5),
    })
  ),
};
