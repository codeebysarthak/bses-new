require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const assignTaskRoutes = require('./routes/assign-task');
const submitRemarkRoutes = require('./routes/submit-remark');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', assignTaskRoutes);
app.use('/api', submitRemarkRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/bsespage.html'));
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});