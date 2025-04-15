
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface WeatherCardProps {
  title: string;
  value: string | React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  title,
  value,
  icon,
  className,
  gradient = false
}) => {
  return (
    <Card className={cn(
      "overflow-hidden",
      gradient ? "bg-gradient-to-br from-weather-purple/10 to-weather-purple/30 border-none" : "",
      className
    )}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-weather-purple">{icon}</div>
        </div>
        <div className="text-xl font-bold mt-1">{value}</div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
