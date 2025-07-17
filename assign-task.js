const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const taskFile = path.join(__dirname, '../data/assignedTasks.json');

router.post('/assign-task', (req, res) => {
  const { devName, task, deadline } = req.body;

  if (!devName || !task || !deadline) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  let tasks = [];
  if (fs.existsSync(taskFile)) {
    tasks = JSON.parse(fs.readFileSync(taskFile));
  }

  tasks.push({ devName, task, deadline, assignedAt: new Date().toISOString() });

  fs.writeFileSync(taskFile, JSON.stringify(tasks, null, 2));
  res.json({ message: 'Task assigned successfully' });
});

module.exports = router;