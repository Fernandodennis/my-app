import React from 'react';
import Survey from './components/Survey';
import MealPlan from './components/MealPlan';
import BiodegradableChecklist from './components/BiodegradableChecklist';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      <Survey />
      <MealPlan />
      <BiodegradableChecklist />
      <Dashboard />
    </div>
  );
}

export default App;
