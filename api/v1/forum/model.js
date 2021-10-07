const mongoose = require("mongoose");

const Forum = new mongoose.Schema(
  {
    sessionId: {
      index: true,
      type: String
    },
    title: {
      index: true,
      type: String
    },
    content: {
      index: true,
      type: String
    },
  }, { timestamps: true });



module.exports = mongoose.model('furom', Forum);