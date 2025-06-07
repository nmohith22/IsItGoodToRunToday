import React from 'react';

export default function PredictionResult({ recommendation, reason }) {
  if (!recommendation) return null;
  return (
    <div className="p-4 mt-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold">Should You Run?</h2>
      <p className="mt-2 text-lg">
        Recommendation: {recommendation === 'yes' ? (
          <span className="text-green-600">Yes</span>
        ) : (
          <span className="text-red-600">No</span>
        )}
      </p>
      <p className="mt-1 italic">Reason: {reason}</p>
    </div>
  );
}