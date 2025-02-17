const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config();

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
      params: {
        key: process.env.WEATHER_API_KEY,
        q: city,
        aqi: "no"
      }
    });
    

    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Unable to fetch weather data' });
  }
};

