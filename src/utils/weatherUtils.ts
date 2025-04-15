import { TemperatureUnit, WindSpeedUnit } from "@/types/weather";

// Mock data for development
export const MOCK_WEATHER_DATA = {
  location: {
    name: "New York",
    country: "USA",
    lat: 40.71,
    lon: -74.01
  },
  current: {
    temp_c: 18,
    temp_f: 64.4,
    condition: {
      text: "Partly Cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      code: 1003
    },
    wind_mph: 8.1,
    wind_kph: 13.0,
    wind_degree: 270,
    wind_dir: "W",
    pressure_mb: 1018.0,
    pressure_in: 30.06,
    humidity: 63,
    feelslike_c: 18.0,
    feelslike_f: 64.4,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 5.0,
    last_updated: "2025-04-15 11:30"
  },
  forecast: {
    forecastday: [
      {
        date: "2025-04-15",
        day: {
          maxtemp_c: 21,
          maxtemp_f: 69.8,
          mintemp_c: 12,
          mintemp_f: 53.6,
          avgtemp_c: 16.5,
          avgtemp_f: 61.7,
          condition: {
            text: "Partly Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003
          },
          daily_chance_of_rain: 0,
          daily_chance_of_snow: 0,
          uv: 5
        },
        hour: [
          {
            time: "2025-04-15 00:00",
            temp_c: 14.2,
            temp_f: 57.6,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 03:00",
            temp_c: 13.1,
            temp_f: 55.6,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 06:00",
            temp_c: 12.5,
            temp_f: 54.5,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 09:00",
            temp_c: 14.8,
            temp_f: 58.6,
            condition: {
              text: "Sunny",
              icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
              code: 1000
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 12:00",
            temp_c: 18.5,
            temp_f: 65.3,
            condition: {
              text: "Partly Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 15:00",
            temp_c: 20.3,
            temp_f: 68.5,
            condition: {
              text: "Partly Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 18:00",
            temp_c: 19.1,
            temp_f: 66.4,
            condition: {
              text: "Partly Cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
              code: 1003
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          },
          {
            time: "2025-04-15 21:00",
            temp_c: 16.2,
            temp_f: 61.2,
            condition: {
              text: "Clear",
              icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
              code: 1000
            },
            chance_of_rain: 0,
            chance_of_snow: 0
          }
        ]
      },
      {
        date: "2025-04-16",
        day: {
          maxtemp_c: 22,
          maxtemp_f: 71.6,
          mintemp_c: 13,
          mintemp_f: 55.4,
          avgtemp_c: 17.5,
          avgtemp_f: 63.5,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          },
          daily_chance_of_rain: 0,
          daily_chance_of_snow: 0,
          uv: 6
        },
        hour: []
      },
      {
        date: "2025-04-17",
        day: {
          maxtemp_c: 24,
          maxtemp_f: 75.2,
          mintemp_c: 15,
          mintemp_f: 59.0,
          avgtemp_c: 19.5,
          avgtemp_f: 67.1,
          condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
            code: 1000
          },
          daily_chance_of_rain: 0,
          daily_chance_of_snow: 0,
          uv: 6
        },
        hour: []
      },
      {
        date: "2025-04-18",
        day: {
          maxtemp_c: 25,
          maxtemp_f: 77.0,
          mintemp_c: 16,
          mintemp_f: 60.8,
          avgtemp_c: 20.5,
          avgtemp_f: 68.9,
          condition: {
            text: "Partly Cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            code: 1003
          },
          daily_chance_of_rain: 10,
          daily_chance_of_snow: 0,
          uv: 5
        },
        hour: []
      },
      {
        date: "2025-04-19",
        day: {
          maxtemp_c: 23,
          maxtemp_f: 73.4,
          mintemp_c: 17,
          mintemp_f: 62.6,
          avgtemp_c: 20.0,
          avgtemp_f: 68.0,
          condition: {
            text: "Patchy rain possible",
            icon: "//cdn.weatherapi.com/weather/64x64/day/176.png",
            code: 1063
          },
          daily_chance_of_rain: 60,
          daily_chance_of_snow: 0,
          uv: 4
        },
        hour: []
      },
      {
        date: "2025-04-20",
        day: {
          maxtemp_c: 19,
          maxtemp_f: 66.2,
          mintemp_c: 15,
          mintemp_f: 59.0,
          avgtemp_c: 17.0,
          avgtemp_f: 62.6,
          condition: {
            text: "Moderate rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/302.png",
            code: 1189
          },
          daily_chance_of_rain: 80,
          daily_chance_of_snow: 0,
          uv: 3
        },
        hour: []
      },
      {
        date: "2025-04-21",
        day: {
          maxtemp_c: 18,
          maxtemp_f: 64.4,
          mintemp_c: 14,
          mintemp_f: 57.2,
          avgtemp_c: 16.0,
          avgtemp_f: 60.8,
          condition: {
            text: "Light rain",
            icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
            code: 1183
          },
          daily_chance_of_rain: 70,
          daily_chance_of_snow: 0,
          uv: 3
        },
        hour: []
      }
    ]
  },
  hourly: [
    {
      time: "2025-04-15 12:00",
      temp_c: 18.5,
      temp_f: 65.3,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 13:00",
      temp_c: 19.2,
      temp_f: 66.6,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 14:00",
      temp_c: 19.8,
      temp_f: 67.6,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 15:00",
      temp_c: 20.3,
      temp_f: 68.5,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 16:00",
      temp_c: 20.1,
      temp_f: 68.2,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 17:00",
      temp_c: 19.8,
      temp_f: 67.6,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 18:00",
      temp_c: 19.1,
      temp_f: 66.4,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    },
    {
      time: "2025-04-15 19:00",
      temp_c: 18.3,
      temp_f: 64.9,
      condition: {
        text: "Partly Cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003
      },
      chance_of_rain: 0,
      chance_of_snow: 0
    }
  ]
};

// Weather API mock functions for development
export const searchLocation = async (query: string): Promise<any> => {
  console.log(`Searching for: ${query}`);
  
  return [
    {
      name: "New York",
      country: "United States of America",
      lat: 40.71,
      lon: -74.01,
      id: "nyc-us"
    },
    {
      name: "London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      id: "ldn-uk"
    },
    {
      name: "Tokyo",
      country: "Japan",
      lat: 35.69,
      lon: 139.69,
      id: "tky-jp"
    },
    {
      name: "Sydney",
      country: "Australia",
      lat: -33.87,
      lon: 151.21,
      id: "syd-au"
    },
    {
      name: "Paris",
      country: "France",
      lat: 48.85,
      lon: 2.35,
      id: "par-fr"
    }
  ].filter(loc => loc.name.toLowerCase().includes(query.toLowerCase()));
};

export const getWeatherData = async (location: string): Promise<any> => {
  console.log(`Fetching weather for: ${location}`);
  
  return MOCK_WEATHER_DATA;
};

// Background gradient based on temperature (Celsius)
export const getTemperatureGradient = (temp: number): string => {
  if (temp < 0) {
    return "from-blue-200 to-blue-400"; // Cold
  } else if (temp < 10) {
    return "from-blue-100 to-cyan-400"; // Cool
  } else if (temp < 20) {
    return "from-cyan-100 to-blue-300"; // Mild
  } else if (temp < 25) {
    return "from-blue-100 to-purple-300"; // Warm
  } else if (temp < 30) {
    return "from-yellow-100 to-orange-300"; // Hot
  } else {
    return "from-orange-200 to-red-400"; // Very hot
  }
};

// Format temperature based on the selected unit
export const formatTemperature = (temp: number, unit: TemperatureUnit): string => {
  return unit === 'celsius' ? `${temp}°C` : `${temp}°F`;
};

// Format wind speed based on the selected unit
export const formatWindSpeed = (speed: number, unit: WindSpeedUnit): string => {
  return unit === 'kph' ? `${speed} km/h` : `${speed} mph`;
};

// Get day name from date
export const getDayName = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);
};

// Format date for display
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric'
  }).format(date);
};

// Format time from string like "2025-04-15 15:00"
export const formatTime = (timeStr: string): string => {
  const date = new Date(timeStr);
  return new Intl.DateTimeFormat('en-US', { 
    hour: 'numeric', 
    hour12: true 
  }).format(date);
};
