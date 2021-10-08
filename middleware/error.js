const httpStatus = require("http-status");

exports.basic = (error, _, res, __) => {
  // TODO: create dif types of error
  const response = {
    code: httpStatus.BAD_REQUEST,
    message: error.message || "bad request",
  };

  res.status(response.code).json(response);
};
