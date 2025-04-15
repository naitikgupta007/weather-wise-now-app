
import React from "react";
import WeatherDashboard from "@/components/WeatherDashboard";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <WeatherDashboard />
      </div>
    </div>
  );
};

export default Index;
