const httpStatus = require("http-status");

const Forum = require("./model");

module.exports = {
  load: async (req, _, next, id) => {
    try {
      const data = await Forum.findById(id);

      req.locals = { data };

      return next();
    } catch (e) {
      return next(e);
    }
  },

  item: (req, res) => {
    res.send({ data: req.locals.data });
  },

  post: async (req, res, next) => {
    try {
      const data = new Forum({ ...req.body, sessionId: req.sessionId });

      await data.save();

      res.status(httpStatus.CREATED);
      res.json({ data });
    } catch (e) {
      next(e);
    }
  },

  patch: async (req, res, next) => {
    try {
      const data = Object.assign(req.locals.data, req.body);

      await data.save();

      res.json(data);
    } catch (e) {
      next(e);
    }
  },

  list: async (req, res, next) => {
    try {
      const data = await Forum.find({});

      res.json({ data });
    } catch (e) {
      next(e);
    }
  },
};
