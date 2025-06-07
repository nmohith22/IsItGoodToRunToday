import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import WeatherDisplay from './components/WeatherDisplay';
import PredictionResult from './components/PredictionResult';
import { getPrediction } from './api';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  const handleCitySelect = async (selectedCity) => {
    setError('');
    setRecommendation(null);
    setReason('');
    setWeather(null);
    setCity(selectedCity);
    try {
      const data = await getPrediction(selectedCity);
      // Extract relevant fields
      const raw = data.raw_weather;
      setWeather({
        temp: raw.main.temp,
        wind_speed: raw.wind.speed,
        description: raw.weather[0].main,
      });
      setRecommendation(data.recommendation);
      setReason(data.reason);
    } catch (err) {
      setError('Unable to fetch data for the selected city.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">RunToday</h1>
      </header>
      <main className="max-w-md mx-auto mt-6">
        <CitySelector onSelectCity={handleCitySelect} />
        {error && <p className="mt-4 text-red-600">{error}</p>}
        <WeatherDisplay weather={weather} />
        <PredictionResult recommendation={recommendation} reason={reason} />
      </main>
    </div>
  );
}

export default App;