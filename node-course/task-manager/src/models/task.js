const mongoose = require("mongoose");
const validator = require("validator");

var Task = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
});

Task = mongoose.model("task", Task, "task");

module.exports = Task;
