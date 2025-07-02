const express = require('express');
const router = express.Router();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

router.post('/', (req, res) => {
  const { code } = req.body;

  if (!code || code.trim() === '') {
    return res.status(400).json({ error: 'Code is empty' });
  }

  const filename = path.join(__dirname, 'tempCode.py');
  fs.writeFileSync(filename, code);

  exec(`python3 ${filename}`, { timeout: 5000 }, (err, stdout, stderr) => {
    fs.unlinkSync(filename); // clean up temp file

    if (err) {
      return res.json({ output: stderr || 'Execution Error' });
    }

    res.json({ output: stdout });
  });
});

module.exports = router;
