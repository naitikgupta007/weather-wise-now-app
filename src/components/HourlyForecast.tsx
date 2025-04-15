
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { HourlyForecast as HourlyForecastType, TemperatureUnit } from "@/types/weather";
import { formatTime, getWeatherIcon } from "@/utils/weatherUtils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface HourlyForecastProps {
  hourlyData: HourlyForecastType[];
  temperatureUnit: TemperatureUnit;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ 
  hourlyData, 
  temperatureUnit 
}) => {
  return (
    <div className="hourly-forecast animate-fade-in">
      <h2 className="text-lg font-semibold mb-3">Hourly Forecast</h2>
      <Card>
        <CardContent className="p-4">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-2">
              {hourlyData.map((hour, index) => {
                const temp = temperatureUnit === "celsius" ? 
                  Math.round(hour.temp_c) : 
                  Math.round(hour.temp_f);
                
                return (
                  <div 
                    key={index} 
                    className="flex flex-col items-center gap-1 min-w-[60px]"
                  >
                    <p className="text-sm font-medium">{formatTime(hour.time)}</p>
                    <div className="text-weather-purple my-1">
                      {getWeatherIcon(hour.condition.text, 24)}
                    </div>
                    <p className="text-lg font-semibold">{temp}°</p>
                    {(hour.chance_of_rain > 0) && (
                      <p className="text-xs text-blue-500">{hour.chance_of_rain}%</p>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HourlyForecast;
