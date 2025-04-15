
import React from "react";
import { CloudRain, CloudSun, Cloud, Snowflake, Sun, Thermometer, CloudLightning, CloudFog, Wind } from "lucide-react";

// Helper function to get weather icon component based on condition
export const getWeatherIcon = (condition: string, size: number = 24) => {
  const iconProps = { size, strokeWidth: 1.5 };
  
  condition = condition.toLowerCase();
  
  if (condition.includes("rain") || condition.includes("drizzle") || condition.includes("shower")) {
    return <CloudRain {...iconProps} />;
  } else if (condition.includes("partly cloudy") || condition.includes("overcast")) {
    return <CloudSun {...iconProps} />;
  } else if (condition.includes("cloudy") || condition.includes("overcast")) {
    return <Cloud {...iconProps} />;
  } else if (condition.includes("snow") || condition.includes("blizzard") || condition.includes("sleet")) {
    return <Snowflake {...iconProps} />;
  } else if (condition.includes("sunny") || condition.includes("clear")) {
    return <Sun {...iconProps} />;
  } else if (condition.includes("thunder") || condition.includes("lightning")) {
    return <CloudLightning {...iconProps} />;
  } else if (condition.includes("fog") || condition.includes("mist")) {
    return <CloudFog {...iconProps} />;
  }
  
  // Default icon
  return <Thermometer {...iconProps} />;
};
