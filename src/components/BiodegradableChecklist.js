import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const biodegradableItems = {
  foods: [
    "Apples", "Bananas", "Berries", "Rice", "Quinoa"
  ],
  products: [
    "Unbleached coffee filters", "Compostable sponges", "Natural loofahs"
  ]
};

const BiodegradableChecklist = () => {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState({
    foods: [],
    products: []
  });

  const handleCheckboxChange = (category, item) => {
    setSelectedItems(prevState => {
      const updatedCategory = prevState[category].includes(item)
        ? prevState[category].filter(i => i !== item)
        : [...prevState[category], item];
      return { ...prevState, [category]: updatedCategory };
    });
  };

  return (
    <div>
      <h1>Biodegradable Checklist</h1>
      <div>
        <h2>Biodegradable Foods</h2>
        {biodegradableItems.foods.map(food => (
          <div key={food}>
            <input
              type="checkbox"
              checked={selectedItems.foods.includes(food)}
              onChange={() => handleCheckboxChange('foods', food)}
            />
            {food}
          </div>
        ))}
      </div>

      <div>
        <h2>Biodegradable Products</h2>
        {biodegradableItems.products.map(product => (
          <div key={product}>
            <input
              type="checkbox"
              checked={selectedItems.products.includes(product)}
              onChange={() => handleCheckboxChange('products', product)}
            />
            {product}
          </div>
        ))}
      </div>

      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default BiodegradableChecklist;
