import React, { useState } from 'react';

export default function CitySelector({ onSelectCity }) {
  const [city, setCity] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSelectCity(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
      <input
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="Enter city name"
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Get Recommendation</button>
    </form>
  );
}