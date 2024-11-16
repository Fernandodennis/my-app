import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mealPlans = {
  glutenFree: {
    description: "A gluten-sensitive meal plan focusing on biodegradable foods.",
    days: {
      monday: {
        breakfast: "Smoothie with spinach, banana, almond milk, and chia seeds",
        lunch: "Quinoa salad with cherry tomatoes, cucumber, and lemon vinaigrette",
        snack: "Sliced apple with almond butter",
        dinner: "Grilled chicken with steamed broccoli and sweet potato"
      },
      tuesday: {
        breakfast: "Oatmeal with almond milk, berries, and honey",
        lunch: "Chickpea salad with avocado and cucumber",
        snack: "Carrot sticks with hummus",
        dinner: "Baked salmon with quinoa and asparagus"
      },
      // Add other days
    }
  },
  // Add more meal plans
};

const MealPlan = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('glutenFree');
  const [selectedDay, setSelectedDay] = useState('monday');

  const displayMealPlan = (planType, day) => {
    const plan = mealPlans[planType];
    if (plan && plan.days[day]) {
      return plan.days[day];
    }
    return {};
  };

  const meal = displayMealPlan(selectedPlan, selectedDay);

  return (
    <div>
      <h1>Meal Plan Selection</h1>
      <div>
        <label htmlFor="mealPlan">Select Meal Plan:</label>
        <select
          id="mealPlan"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
        >
          <option value="glutenFree">Gluten-Free</option>
          <option value="general">General</option>
          {/* Add more plans */}
        </select>
      </div>

      <div>
        <label htmlFor="mealDay">Select Day:</label>
        <select
          id="mealDay"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
        >
          <option value="monday">Monday</option>
          <option value="tuesday">Tuesday</option>
          {/* Add more days */}
        </select>
      </div>

      <div>
        <h2>{selectedPlan} Meal Plan for {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</h2>
        <p>Breakfast: {meal.breakfast}</p>
        <p>Lunch: {meal.lunch}</p>
        <p>Snack: {meal.snack}</p>
        <p>Dinner: {meal.dinner}</p>
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default MealPlan;
