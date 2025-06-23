const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

// POST - Save a submission
router.post("/", async (req, res) => {
  try {
    const { question, code, report } = req.body;
    const newSubmission = new Submission({ question, code, report });
    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Fetch all submissions
router.get("/", async (req, res) => {
  try {
    const all = await Submission.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
