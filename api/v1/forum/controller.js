const httpStatus = require("http-status");
const Forum = require("./model");

exports.load = async (req, _, next, id) => {
  try {
    const data = await Forum.get(id);
    req.locals = { data };
    return next();
  } catch (error) {
    return next(error);
  }
};

exports.item = (req, res) => {
  res.send({ data: req.locals.data });
};

exports.post = async (req, res, next) => {
  try {
    const data = new Forum(req.body);

    await data.save();

    res.status(httpStatus.CREATED);
    res.json({ data });
  } catch (e) {
    next(e);
  }
};

exports.patch = async (req, res) => {
  try {
    const data = Object.assign(req.locals.data);

    await data.save();

    res.json(data);
  } catch (e) {
    next(e);
  }
};

exports.list = async (req, res) => {
  try {
    const data = await Forum.find({});

    res.json({ data });
  } catch (e) {
    next(e);
  }
};
