
import React from "react";
import { ForecastDay, TemperatureUnit } from "@/types/weather";
import { getDayName, formatDate, getWeatherIcon } from "@/utils/weatherUtils";
import { Card } from "@/components/ui/card";

interface DailyForecastProps {
  forecastDays: ForecastDay[];
  temperatureUnit: TemperatureUnit;
}

const DailyForecast: React.FC<DailyForecastProps> = ({ 
  forecastDays, 
  temperatureUnit 
}) => {
  return (
    <div className="daily-forecast animate-fade-in">
      <h2 className="text-lg font-semibold mb-3">7-Day Forecast</h2>
      <Card className="p-4">
        <div className="grid gap-2">
          {forecastDays.map((day, index) => {
            const maxTemp = temperatureUnit === "celsius" ? 
              Math.round(day.day.maxtemp_c) : 
              Math.round(day.day.maxtemp_f);
            
            const minTemp = temperatureUnit === "celsius" ? 
              Math.round(day.day.mintemp_c) : 
              Math.round(day.day.mintemp_f);

            const isToday = index === 0;
            
            return (
              <div 
                key={day.date} 
                className={`flex items-center justify-between py-2 ${
                  index < forecastDays.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`font-medium w-10 ${isToday ? "text-weather-purple" : ""}`}>
                    {isToday ? "Today" : getDayName(day.date)}
                  </div>
                  <div className="text-weather-purple">
                    {getWeatherIcon(day.day.condition.text, 20)}
                  </div>
                  <div className="hidden sm:block text-xs text-muted-foreground">
                    {formatDate(day.date)}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-xs px-2 rounded">
                    {day.day.daily_chance_of_rain > 0 && (
                      <span className="text-blue-500">{day.day.daily_chance_of_rain}%</span>
                    )}
                  </div>
                  <div className="flex gap-2 text-sm">
                    <span className="font-medium">{maxTemp}°</span>
                    <span className="text-muted-foreground">{minTemp}°</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default DailyForecast;
