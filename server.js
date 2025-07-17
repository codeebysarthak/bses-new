require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const authRoutes = require('./routes/auth');
const dashboardRoutes = require('./routes/dashboard');
const assignTaskRoutes = require('./routes/assign-task');
const submitRemarkRoutes = require('./routes/submit-remark');

app.use('/api', authRoutes);
app.use('/api', dashboardRoutes);
app.use('/api', assignTaskRoutes);
app.use('/api', submitRemarkRoutes);

// Serve frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/bsespage.html'));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
