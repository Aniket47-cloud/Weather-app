import { useState } from 'react';
import React from 'react';
import {
  FaSearch,
  FaWind,
  FaEye,
  FaSun,
  FaThermometerHalf,
  FaTint,
} from "react-icons/fa";
const Dashboard = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null); 
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState('')
  const fetchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name!");
      return;
    }
  
    try {
      setLoading(true);
      setError(""); 
  
      const response = await fetch(`http://localhost:3000/api/weather/${city}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
  
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError("Unable to fetch data. Please try again!");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-800 p-6 flex w-full items-center justify-center">
      <div className="max-w-2xl w-full  bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 p-6 py-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white drop-shadow-md">Weather Dashboard</h2>
          <p className="text-slate-300">Get real-time weather updates worldwide</p>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center gap-2 mb-6">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="w-full px-4 py-3 bg-slate-800/60 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-400 border border-slate-700"
          />
          <button
           onClick={fetchWeather}
            className="p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 active:bg-blue-800 transition-all disabled:opacity-50"
            disabled={loading }
          >
            {loading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <FaSearch className="w-5 h-5" />}
          </button>
        </div>

     
        {error && <div className="text-red-400 text-center bg-red-500/20 p-3 rounded-lg mb-4">{error}</div>}

        
        {weather && (
          <div className="space-y-6 text-center">
            <h3 className="text-3xl font-bold text-white">{weather.location.name}, {weather.location.country}</h3>
            <div className="flex items-center justify-center gap-4">
              <img src={weather.current.condition.icon} alt="Weather" className="w-28 h-28" />
              <div className="flex flex-col space-y-2">
                <p className="text-5xl font-bold text-white">{weather.current.temp_c}°C</p>
                <p className="text-lg text-slate-300 mt-2">{weather.current.condition.text}</p>
              </div>
            </div>
            
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[{ icon: FaTint, label: "Humidity", value: `${weather.current.humidity}%`, color: "text-blue-400" },
                { icon: FaThermometerHalf, label: "Pressure", value: `${weather.current.pressure_mb} hPa`, color: "text-red-400" },
                { icon: FaWind, label: "Wind", value: `${weather.current.wind_kph} kph ${weather.current.wind_dir}`, color: "text-emerald-400" },
                { icon: FaEye, label: "Visibility", value: `${weather.current.vis_km} km`, color: "text-purple-400" },
                { icon: FaSun, label: "UV Index", value: weather.current.uv, color: "text-yellow-400" }]
                .map(({ icon: Icon, label, value, color }, index) => (
                  <div key={index} className="bg-slate-800/60 rounded-lg p-4 border border-white/10 hover:bg-slate-800/80 transition-all flex flex-col items-center">
                    <Icon className={`w-6 h-6 ${color}`} />
                    <p className="text-slate-300 text-sm">{label}</p>
                    <p className="text-white font-semibold">{value}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
