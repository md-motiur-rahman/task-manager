const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "A task must have a title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "A task must have a description"],
    trim: true,
  },
  status: {
    type: String,
    required: [true, "A task must have a status"],
    default: "pending",
    enum: ["pending", "ongoing", "complete"],
  },
  createdAt:{
    type: Date,
    default: Date.now()
  }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
