
import React, { useState } from "react";
import { WeatherData, TemperatureUnit, WindSpeedUnit } from "@/types/weather";
import { MOCK_WEATHER_DATA, getWeatherData } from "@/utils/weatherUtils";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import WeatherHeader from "./WeatherHeader";
import LocationSearch from "./LocationSearch";
import WeatherDetails from "./WeatherDetails";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";
import TemperatureChart from "./TemperatureChart";
import { toast } from "@/components/ui/use-toast";

const WeatherDashboard: React.FC = () => {
  // State for weather data
  const [weatherData, setWeatherData] = useState<WeatherData>(MOCK_WEATHER_DATA);
  const [location, setLocation] = useState<string>("New York");
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>("celsius");
  const [windSpeedUnit, setWindSpeedUnit] = useState<WindSpeedUnit>("kph");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Handle location change
  const handleLocationChange = async (newLocation: string) => {
    setIsLoading(true);
    try {
      const data = await getWeatherData(newLocation);
      setWeatherData(data);
      setLocation(newLocation);
      toast({
        title: "Location Updated",
        description: `Weather data for ${newLocation} has been loaded.`,
        duration: 3000
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
      toast({
        title: "Error",
        description: "Failed to load weather data. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="weather-dashboard w-full max-w-5xl mx-auto px-4 py-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-weather-purple to-weather-dark-purple">
          WeatherWise
        </h1>
        
        <div className="flex items-center gap-2">
          <ToggleGroup 
            type="single" 
            value={temperatureUnit} 
            onValueChange={(value: TemperatureUnit) => {
              if (value) setTemperatureUnit(value);
            }}
            className="border rounded-md"
          >
            <ToggleGroupItem 
              value="celsius" 
              size="sm" 
              className="text-xs px-2 h-8"
            >
              °C
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="fahrenheit" 
              size="sm" 
              className="text-xs px-2 h-8"
            >
              °F
            </ToggleGroupItem>
          </ToggleGroup>
          
          <ToggleGroup 
            type="single" 
            value={windSpeedUnit} 
            onValueChange={(value: WindSpeedUnit) => {
              if (value) setWindSpeedUnit(value);
            }}
            className="border rounded-md"
          >
            <ToggleGroupItem 
              value="kph" 
              size="sm" 
              className="text-xs px-2 h-8"
            >
              km/h
            </ToggleGroupItem>
            <ToggleGroupItem 
              value="mph" 
              size="sm" 
              className="text-xs px-2 h-8"
            >
              mph
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <LocationSearch 
        onLocationSelect={handleLocationChange}
        currentLocation={location}
      />

      <div className={`transition-opacity duration-300 ${isLoading ? "opacity-50" : "opacity-100"}`}>
        <WeatherHeader 
          weatherData={weatherData} 
          temperatureUnit={temperatureUnit} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <WeatherDetails 
            weatherData={weatherData} 
            temperatureUnit={temperatureUnit} 
            windSpeedUnit={windSpeedUnit} 
          />
          <TemperatureChart 
            hourlyData={weatherData.hourly} 
            temperatureUnit={temperatureUnit} 
          />
        </div>

        <div className="mb-6">
          <HourlyForecast 
            hourlyData={weatherData.hourly} 
            temperatureUnit={temperatureUnit} 
          />
        </div>

        <div>
          <DailyForecast 
            forecastDays={weatherData.forecast.forecastday} 
            temperatureUnit={temperatureUnit} 
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
