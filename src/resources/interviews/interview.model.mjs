import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    questions: {
      type: Array,
    },
    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },

  { timestamps: true }
);

export const Interview = mongoose.model("interview", interviewSchema);
