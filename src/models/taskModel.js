import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: date,
      default: Date.now,
    },
    complete: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default new mongoose.model("Task", taskSchema);
