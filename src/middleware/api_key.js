const httpStatus = require("http-status");
const constant = require("../config/constant");
const util = require("../util");

// first protection for unknown access
exports.client = (req, res, next) => {
  const clientKey = req.headers.app_client_key;

  if (clientKey && clientKey === constant.clientKey) {
    return next();
  }

  util.response.error(res, httpStatus.BAD_REQUEST, "please contact admin");
};
