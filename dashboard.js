const express = require('express');
const router = express.Router();
const dashboardData = require('../data/dashboard.json');

router.get('/dashboard', (req, res) => {
  res.json(dashboardData);
});

module.exports = router;