const httpStatus = require("http-status");
const util = require("../util");

exports.basic = (error, _, res, __) => {
  // TODO: create dif types of error

  util.response.error(res, httpStatus.BAD_REQUEST, error.message);
};
