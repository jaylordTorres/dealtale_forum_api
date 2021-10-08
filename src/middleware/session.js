const httpStatus = require("http-status");
const uuid = require("uuid");

exports.required = (req, res, next) => {
  const sessionId = req.headers.app_session_id;

  if (sessionId && uuid.validate(sessionId)) {
    req.sessionId = sessionId;
    return next();
  }

  util.response.error(res, httpStatus.UNAUTHORIZED, "require valid session id");
};
