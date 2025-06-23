const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  question: String,
  code: String,
  report: {
    correctness: String,
    time_complexity: String,
    explanation: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Submission", SubmissionSchema);
