const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const remarkFile = path.join(__dirname, '../data/remarks.json');

router.post('/submit-remark', (req, res) => {
  const { devName, remark } = req.body;

  if (!devName || !remark) {
    return res.status(400).json({ message: 'Missing developer name or remark' });
  }

  let remarks = [];
  if (fs.existsSync(remarkFile)) {
    remarks = JSON.parse(fs.readFileSync(remarkFile));
  }

  remarks.push({ devName, remark, date: new Date().toISOString() });

  fs.writeFileSync(remarkFile, JSON.stringify(remarks, null, 2));
  res.json({ message: 'Remark submitted successfully' });
});

module.exports = router;