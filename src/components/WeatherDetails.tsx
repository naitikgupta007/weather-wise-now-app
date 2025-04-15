
import React from "react";
import { Grid2X2, Wind, Droplets, Gauge, Thermometer, Clock, UmbrellaIcon } from "lucide-react";
import { WeatherData, TemperatureUnit, WindSpeedUnit } from "@/types/weather";
import { formatWindSpeed } from "@/utils/weatherUtils";
import WeatherCard from "./WeatherCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WeatherDetailsProps {
  weatherData: WeatherData;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  weatherData,
  temperatureUnit,
  windSpeedUnit
}) => {
  const { current, forecast } = weatherData;
  const today = forecast.forecastday[0];
  
  const windSpeed = windSpeedUnit === "kph" ? current.wind_kph : current.wind_mph;
  
  return (
    <div className="weather-details animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Weather Details</h2>
        <Tabs defaultValue="today">
          <TabsList className="h-8">
            <TabsTrigger className="text-xs h-7" value="today">Today</TabsTrigger>
            <TabsTrigger className="text-xs h-7" value="stats">Statistics</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <TabsContent value="today" className="mt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <WeatherCard 
            title="Wind" 
            value={`${formatWindSpeed(windSpeed, windSpeedUnit)} ${current.wind_dir}`}
            icon={<Wind size={18} />}
          />
          <WeatherCard 
            title="Humidity" 
            value={`${current.humidity}%`}
            icon={<Droplets size={18} />} 
          />
          <WeatherCard 
            title="Pressure" 
            value={`${current.pressure_mb} hPa`}
            icon={<Gauge size={18} />} 
          />
          <WeatherCard 
            title="Feels Like" 
            value={`${temperatureUnit === "celsius" ? current.feelslike_c : current.feelslike_f}°`}
            icon={<Thermometer size={18} />} 
          />
        </div>
      </TabsContent>
      
      <TabsContent value="stats" className="mt-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <WeatherCard 
            title="UV Index" 
            value={current.uv.toString()}
            icon={<Thermometer size={18} />} 
            gradient={current.uv > 5}
          />
          <WeatherCard 
            title="Visibility" 
            value={`${windSpeedUnit === "kph" ? current.vis_km + " km" : current.vis_miles + " mi"}`}
            icon={<Clock size={18} />} 
          />
          <WeatherCard 
            title="Rain Chance" 
            value={`${today.day.daily_chance_of_rain}%`}
            icon={<UmbrellaIcon size={18} />} 
            gradient={today.day.daily_chance_of_rain > 50}
          />
          <WeatherCard 
            title="Overview" 
            value={<span className="text-base">{current.condition.text}</span>}
            icon={<Grid2X2 size={18} />} 
          />
        </div>
      </TabsContent>
    </div>
  );
};

export default WeatherDetails;
