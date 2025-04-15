
export interface WeatherData {
  location: {
    name: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    humidity: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    last_updated: string;
  };
  forecast: {
    forecastday: ForecastDay[];
  };
  hourly: HourlyForecast[];
}

export interface ForecastDay {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    uv: number;
  };
  hour: HourlyForecast[];
}

export interface HourlyForecast {
  time: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  chance_of_rain: number;
  chance_of_snow: number;
}

export interface LocationSearchResult {
  name: string;
  country: string;
  lat: number;
  lon: number;
  id: string;
}

export type TemperatureUnit = 'celsius' | 'fahrenheit';
export type WindSpeedUnit = 'kph' | 'mph';
