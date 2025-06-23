const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

router.post("/", async (req, res) => {
  try {
    const { question, code, report } = req.body;
    const { is_correct, correctness, time_complexity, space_complexity } = report;

    const newSubmission = new Submission({
      question,
      code,
      report: {
        correctness,
        time_complexity,
        space_complexity,
        is_correct,
      },
    });

    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
