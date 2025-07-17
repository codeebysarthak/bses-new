const express = require('express');
const router = express.Router();
const users = require('../data/users.json');

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user: { name: user.name, role: user.role } });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;