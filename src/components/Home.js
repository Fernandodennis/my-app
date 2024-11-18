import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Survey from './Survey';
import MealPlan from './MealPlan';
import BiodegradableChecklist from './BiodegradableChecklist';
import Dashboard from './Dashboard';
import SortingGame from './game';

const Home = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Waste Management App</h1>
        <nav>
          <ul>
            <li><Link to="/survey">Survey</Link></li>
            <li><Link to="/meal-plan">Meal Plan</Link></li>
            <li><Link to="/biodegradable-checklist">Biodegradable Checklist</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/game">Minigame</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/survey" element={<Survey />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/biodegradable-checklist" element={<BiodegradableChecklist />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/game" element={<SortingGame />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
