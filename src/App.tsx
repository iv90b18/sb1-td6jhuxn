import React from 'react';
import { GradeInput } from './components/GradeInput';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-8">Grade Calculator</h1>
        <GradeInput />
      </div>
    </div>
  );
}

export default App;