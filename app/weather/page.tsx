


// // //C:\Web-Development\Codvata\Bismillah\lavel-1\lavel2\lavel2\app\about\page.tsx 
// // const Weather=()=>{
// //     return(
// //         <div>Weather</div>
// //     )
// // }
// // export default  Weather ca72c0f2276472cb549a22deafbf9c19


// "use client";

// import { useState } from "react";

// export default function Weather() {

//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const getWeather = async () => {

//     setLoading(true);
//     setError("");

//     try {

//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca72c0f2276472cb549a22deafbf9c19&units=metric`
//       );

//       const data = await res.json();

//       if (data.cod !== 200) {
//         setError("City not found");
//         setWeather(null);
//       } else {
//         setWeather(data);
//       }

//     } catch {
//       setError("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-10">

//       <h1 className="text-3xl font-bold mb-6">Weather Search</h1>

//       <div className="flex gap-3 mb-6">

//         <input
//           type="text"
//           placeholder="Enter city"
//           className="border p-3 rounded w-full"
//           onChange={(e) => setCity(e.target.value)}
//         />

//         <button
//           onClick={getWeather}
//           className="bg-blue-600 text-white px-6 rounded"
//         >
//           Search
//         </button>

//       </div>

//       {loading && <p>Loading...</p>}

//       {error && <p className="text-red-500">{error}</p>}

//       {weather && (
//         <div className="p-6 shadow rounded">

//           <h2 className="text-xl font-bold">
//             City: {weather.name}
//           </h2>

//           <p>Temperature: {weather.main.temp} °C</p>
//           <p>Humidity: {weather.main.humidity}%</p>
//           <p>Weather: {weather.weather[0].description}</p>

//         </div>
//       )}

//     </div>
//   );
// }



"use client";

import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca72c0f2276472cb549a22deafbf9c19&units=metric`
      );

      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message || "City not found");
      } else {
        setWeather(data);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Dynamic background gradient based on weather
  const getBackground = () => {
    if (!weather) return "from-blue-600 to-indigo-800";

    const condition = weather.weather[0].main.toLowerCase();

    if (condition.includes("clear")) return "from-yellow-400 via-orange-500 to-red-600";
    if (condition.includes("cloud")) return "from-gray-600 to-blue-900";
    if (condition.includes("rain") || condition.includes("drizzle")) return "from-blue-900 via-indigo-900 to-purple-950";
    if (condition.includes("thunderstorm")) return "from-gray-900 via-indigo-950 to-purple-950";
    if (condition.includes("snow")) return "from-blue-200 via-indigo-300 to-blue-400";
    if (condition.includes("mist") || condition.includes("fog") || condition.includes("haze")) {
      return "from-gray-500 via-slate-600 to-gray-700";
    }

    return "from-blue-600 to-indigo-800"; // default
  };

  const iconUrl = weather ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png` : null;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackground()} text-white transition-all duration-1000 flex items-center justify-center p-6`}
    >
      <div className="w-full max-w-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center tracking-tight drop-shadow-lg">
          Weatherly
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search city (e.g. Dhaka, London...)"
            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition shadow-lg text-lg"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && getWeather()}
          />

          <button
            onClick={getWeather}
            disabled={loading}
            className="px-8 py-4 bg-white/25 backdrop-blur-lg rounded-full font-semibold text-lg hover:bg-white/40 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-white/30"
          >
            {loading ? "Fetching..." : "Search"}
          </button>
        </div>

        {error && (
          <p className="text-center text-red-300 bg-red-900/40 backdrop-blur-md p-4 rounded-xl mb-8 border border-red-500/30">
            {error}
          </p>
        )}

        {loading && (
          <div className="text-center text-xl animate-pulse">Loading weather magic...</div>
        )}

        {weather && (
          <div
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-4xl transition-all duration-500 transform hover:scale-[1.02]"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-bold drop-shadow-md">
                  {weather.name}, {weather.sys.country}
                </h2>
                <p className="text-2xl md:text-3xl mt-2 capitalize opacity-90">
                  {weather.weather[0].description}
                </p>
              </div>

              <div className="flex flex-col items-center">
                {iconUrl && (
                  <img
                    src={iconUrl}
                    alt={weather.weather[0].description}
                    className="w-32 h-32 md:w-40 md:h-40 drop-shadow-2xl"
                  />
                )}
                <p className="text-6xl md:text-7xl font-extrabold mt-2 drop-shadow-lg">
                  {Math.round(weather.main.temp)}°C
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-sm uppercase tracking-wide opacity-80">Feels like</p>
                <p className="text-3xl font-bold mt-1">{Math.round(weather.main.feels_like)}°C</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-sm uppercase tracking-wide opacity-80">Humidity</p>
                <p className="text-3xl font-bold mt-1">{weather.main.humidity}%</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-sm uppercase tracking-wide opacity-80">Wind</p>
                <p className="text-3xl font-bold mt-1">{weather.wind.speed} m/s</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
