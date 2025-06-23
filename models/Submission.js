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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", submissionSchema);
