import React, { useState } from 'react';
import { calculateGrade } from '../utils/calculateGrade';

export function GradeInput() {
  const [score, setScore] = useState<string>('');
  const [grade, setGrade] = useState<string>('');

  const handleCalculate = () => {
    const numericScore = Number(score);
    if (numericScore >= 0 && numericScore <= 100) {
      setGrade(calculateGrade(numericScore));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="score" className="block text-sm font-medium text-gray-700">
          Enter Score (0-100)
        </label>
        <input
          type="number"
          id="score"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Calculate Grade
      </button>
      {grade && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Grade: {grade}</h2>
        </div>
      )}
    </div>
  );
}