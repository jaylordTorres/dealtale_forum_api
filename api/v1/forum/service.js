const httpStatus = require('http-status')


exports.load = async (req, res, next, id) => {
  try {
    const bill = await Bill.get(id)
    req.locals = { bill }
    return next()
  } catch (error) {
    return next(error)
  }
}