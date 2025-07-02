const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    question: String,
    code: String,
    report: {
      is_correct: String,
      correctness: String,
      time_complexity: String,
      space_complexity: String,
    },
    difficulty: {
      type: String,
      enum: ['below_expected', 'as_expected', 'above_expected'],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
