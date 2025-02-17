# 🌦️ Weather Dashboard (MERN Stack)

## 📌 Overview
A **MERN stack** web app that allows users to **sign up, log in, and fetch real-time weather data** from **WeatherAPI.com**. JWT-based authentication ensures secure access.

## 🚀 Features
- **JWT Authentication** (Signup, Login, Logout)
- **Real-time Weather Data** from **WeatherAPI.com**
- **Weather Search by City**
- **Tailwind CSS** for Styling
- **Redux** for State Management
- **Secure REST API** with Express & MongoDB

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, JWT, WeatherAPI.com
- **Frontend:** React.js, React Router, Tailwind CSS, Redux, Axios

## ⚙️ Setup & Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```
2. **Backend Setup:**
   ```sh
   cd backend && npm init -y
   ```
   - Add a `.env` file with:
     ```env
     PORT=3000
     MONGO_URL=your_mongodb_url
     JWT_SECRET=your_jwt_secret
     WEATHER_API_KEY=your_weatherapi_key
     ```
   - Start the backend:
     ```sh
     npx nodemon
     ```
3. **Frontend Setup:**
   ```sh
   cd ../frontend && npm install 
   npm run dev
   ```

## 📖 API Endpoints
- `POST /api/auth/signup` → Register user
- `POST /api/auth/login` → Login user
- `GET /api/auth/user` → Get user details
- `GET /api/weather/:city` → Fetch weather data

## 🔐 Authentication
- Users receive a **JWT token** upon login.
- Token stored in **localStorage** for authentication.
- Private routes protected using **JWT verification**.

## 📌 Future Improvements
- **Deploy** on Vercel (Frontend) & Render (Backend)
- **Material UI** for UI enhancements
- **Bookmark feature** for favorite cities

✨ **Feel free to contribute!**

