
import React from "react";
import { MapPin } from "lucide-react";
import { WeatherData, TemperatureUnit } from "@/types/weather";
import { formatTemperature, getWeatherIcon } from "@/utils/weatherUtils";

interface WeatherHeaderProps {
  weatherData: WeatherData;
  temperatureUnit: TemperatureUnit;
}

const WeatherHeader: React.FC<WeatherHeaderProps> = ({ weatherData, temperatureUnit }) => {
  const { location, current } = weatherData;
  const temperature = temperatureUnit === "celsius" ? current.temp_c : current.temp_f;
  const feels_like = temperatureUnit === "celsius" ? current.feelslike_c : current.feelslike_f;
  
  // Get current date
  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(currentDate);

  return (
    <div className="weather-header animate-fade-in mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin size={16} />
            <h2 className="text-sm font-medium">
              {location.name}, {location.country}
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{formattedDate}</p>
        </div>
        
        <div className="flex items-center justify-between md:justify-end gap-4 md:gap-8">
          <div className="text-center md:text-right">
            <div className="font-medium">{current.condition.text}</div>
            <div className="text-xs text-muted-foreground">
              Last updated: {current.last_updated.split(" ")[1]}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="text-4xl md:text-5xl font-semibold mr-2">
              {Math.round(temperature)}°
            </div>
            <div className="text-weather-purple">
              {getWeatherIcon(current.condition.text, 42)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-secondary/50 p-2 rounded-lg text-xs md:text-sm text-center">
        Feels like {formatTemperature(Math.round(feels_like), temperatureUnit)} · 
        Humidity {current.humidity}% · 
        UV Index {current.uv}
      </div>
    </div>
  );
};

export default WeatherHeader;
