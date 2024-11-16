import React, { useState } from 'react';

const Dashboard = () => {
  const [wasteType, setWasteType] = useState('food');
  const [reductionGoal, setReductionGoal] = useState('reduceWaste');

  const handleSubmit = () => {
    console.log('Dashboard Submitted', { wasteType, reductionGoal });
    alert('Waste tracking preferences saved!');
  };

  return (
    <div>
      <h1>Personalized Dashboard</h1>

      <div>
        <label htmlFor="wasteType">Select Waste to Track:</label>
        <select
          id="wasteType"
          value={wasteType}
          onChange={(e) => setWasteType(e.target.value)}
        >
          <option value="food">Food</option>
          <option value="plastic">Plastic</option>
          <option value="paper">Paper</option>
          <option value="glass">Glass</option>
        </select>
      </div>

      <div>
        <label htmlFor="reductionGoal">Select Goal:</label>
        <select
          id="reductionGoal"
          value={reductionGoal}
          onChange={(e) => setReductionGoal(e.target.value)}
        >
          <option value="reduceWaste">Reduce waste by X%</option>
          <option value="recycleMore">Recycle more</option>
          <option value="compostFood">Compost food waste</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Dashboard;
