const express = require('express');
const { getWeather,getForecast } = require('../controllers/weatherController');

const router = express.Router();

router.get('/:city', getWeather);

module.exports= router;
