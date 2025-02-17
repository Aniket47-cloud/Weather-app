const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const app = express();


app.use(express.json());
app.use(cors());


app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);


module.exports = app;