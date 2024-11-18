import React, { useState } from "react";

const mealPlans = {
  glutenFree: {
    description: "A gluten-sensitive meal plan focusing on biodegradable foods.",
    days: {
      monday: {
        breakfast: "Smoothie with spinach, banana, almond milk, and chia seeds",
        lunch: "Quinoa salad with cherry tomatoes, cucumber, and lemon vinaigrette",
        snack: "Sliced apple with almond butter",
        dinner: "Grilled chicken with steamed broccoli and sweet potato",
      },
      tuesday: {
        breakfast: "Overnight oats with almond milk and berries",
        lunch: "Lentil soup with carrots, celery, and herbs",
        snack: "Carrot sticks with hummus",
        dinner: "Baked salmon with asparagus and brown rice",
      },
    },
  },
  general: {
    description: "A balanced meal plan for general health with biodegradable foods.",
    days: {
      monday: {
        breakfast: "Overnight oats with almond milk, bananas, and chia seeds",
        lunch: "Quinoa salad with mixed greens, cherry tomatoes, and lemon-olive oil dressing",
        snack: "Carrot sticks with hummus",
        dinner: "Grilled chicken with roasted sweet potatoes and steamed broccoli",
        dessert: "Baked apple with cinnamon",
      },
      tuesday: {
        breakfast: "Smoothie with spinach, banana, and almond milk",
        lunch: "Lentil soup with carrots and celery",
        snack: "Sliced cucumber with tzatziki",
        dinner: "Baked salmon with asparagus and quinoa",
        dessert: "Dark chocolate square",
      },
    },
  },
  diabetesFriendly: {
    description: "A meal plan featuring biodegradable foods for diabetes management.",
    days: {
      monday: {
        breakfast: "Overnight oats with chia seeds, almond milk, and berries",
        lunch: "Salad with cherry tomatoes, cucumber, spinach, and lemon-olive oil dressing",
        snack: "Carrot sticks with hummus",
        dinner: "Grilled chicken with steamed broccoli and sweet potatoes",
        dessert: "Chia seed pudding with sliced strawberries",
      },
      tuesday: {
        breakfast: "Greek yogurt with walnuts and cinnamon",
        lunch: "Lentil soup with mixed greens",
        snack: "Celery sticks with peanut butter",
        dinner: "Baked salmon with asparagus and quinoa",
        dessert: "Sliced kiwi",
      },
    },
  },
};

function MealPlans() {
  const [selectedPlan, setSelectedPlan] = useState("glutenFree");
  const [selectedDay, setSelectedDay] = useState("monday");

  const plan = mealPlans[selectedPlan];
  const dayMeals = plan?.days[selectedDay] || {};

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Meal Plans</h1>
      <p><strong>Description:</strong> {plan.description}</p>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="planType">Choose a Meal Plan:</label>
        <select
          id="planType"
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        >
          {Object.keys(mealPlans).map((planKey) => (
            <option key={planKey} value={planKey}>
              {planKey}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="day">Choose a Day:</label>
        <select
          id="day"
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          style={{ width: "100%", padding: "8px", margin: "10px 0" }}
        >
          {Object.keys(plan.days).map((day) => (
            <option key={day} value={day}>
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h2>Meals for {selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1)}</h2>
        <p><strong>Breakfast:</strong> {dayMeals.breakfast || "Not available"}</p>
        <p><strong>Lunch:</strong> {dayMeals.lunch || "Not available"}</p>
        <p><strong>Snack:</strong> {dayMeals.snack || "Not available"}</p>
        <p><strong>Dinner:</strong> {dayMeals.dinner || "Not available"}</p>
        {dayMeals.dessert && <p><strong>Dessert:</strong> {dayMeals.dessert}</p>}
      </div>
    </div>
  );
}

export default MealPlans;
