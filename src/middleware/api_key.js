const httpStatus = require("http-status");
const constant = require("../config/constant");

exports.client = (req, res, next) => {
  // first protection for unknown access
  if (req.headers.client_key && req.headers.client_key === constant.clientKey) {
    return next();
  }

  const response = {
    code: httpStatus.BAD_REQUEST,
    message: "please contact admin",
  };

  res.status(response.code).json(response);
};
