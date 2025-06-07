import React from 'react';

export default function WeatherDisplay({ weather }) {
  if (!weather) return null;
  const { temp, wind_speed, description } = weather;
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold">Current Weather</h2>
      <p>Temperature: {temp}°C</p>
      <p>Wind Speed: {wind_speed} m/s</p>
      <p>Conditions: {description}</p>
    </div>
  );
}