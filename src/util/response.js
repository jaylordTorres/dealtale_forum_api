//
module.exports.error = (res, status, message = "bad request") => {
  const response = {
    code: status,
    message,
  };

  res.status(status).json(response);
};
