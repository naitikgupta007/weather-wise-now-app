
import React from 'react';
import { Card } from '@/components/ui/card';
import { HourlyForecast, TemperatureUnit } from '@/types/weather';
import { formatTime } from '@/utils/weatherUtils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TemperatureChartProps {
  hourlyData: HourlyForecast[];
  temperatureUnit: TemperatureUnit;
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ 
  hourlyData, 
  temperatureUnit 
}) => {
  // Transform the data for the chart
  const chartData = hourlyData.map(hour => {
    return {
      time: formatTime(hour.time),
      temperature: temperatureUnit === 'celsius' ? hour.temp_c : hour.temp_f,
      condition: hour.condition.text,
      precipitation: hour.chance_of_rain
    };
  });

  return (
    <div className="temperature-chart animate-fade-in">
      <h2 className="text-lg font-semibold mb-3">Temperature Trend</h2>
      <Card className="p-4">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 5, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="temperatureGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9b87f5" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
              <XAxis 
                dataKey="time" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                dx={-10}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="temperature" 
                stroke="#9b87f5" 
                strokeWidth={2}
                fill="url(#temperatureGradient)" 
                dot={{ stroke: '#9b87f5', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#9b87f5', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default TemperatureChart;
