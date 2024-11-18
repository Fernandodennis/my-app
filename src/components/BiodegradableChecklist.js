import React from "react";

const biodegradableChecklist = {
  foods: {
    fruitsAndVegetables: [
      "Apples",
      "Bananas",
      "Berries (e.g., strawberries, blueberries)",
      "Citrus fruits (oranges, lemons, limes)",
      "Leafy greens (spinach, kale, lettuce)",
      "Root vegetables (carrots, beets, potatoes, onions)",
      "Tomatoes",
      "Peppers",
      "Cucumbers",
      "Seasonal produce based on availability",
    ],
    grainsAndLegumes: [
      "Rice",
      "Quinoa",
      "Barley",
      "Beans (black, kidney, chickpeas)",
      "Lentils",
      "Split Peas",
      "Oats",
    ],
    herbsAndSeasonings: [
      "Fresh herbs (parsley, cilantro, basil, thyme)",
      "Garlic",
      "Ginger",
      "Peppercorns",
      "Whole spices",
    ],
    nutsAndSeeds: [
      "Almonds",
      "Walnuts",
      "Cashews",
      "Pumpkin seeds",
      "Sunflower seeds",
      "Flaxseeds",
      "Chia seeds",
    ],
    dairyAndAlternatives: [
      "Eggs (shells are compostable)",
      "Milk",
      "Cheese",
      "Yogurt (in small amounts)",
    ],
  },
  biodegradableItems: {
    paperProducts: [
      "Unbleached coffee filters",
      "Paper towels",
      "Napkins (recycled paper)",
    ],
    naturalSponges: ["Compostable sponges (cellulose or loofah)"],
    biodegradableBagsWraps: [
      "Reusable wraps (beeswax wraps)",
      "Compostable food storage bags",
    ],
    woodenBambooCutlery: [
      "Wooden utensils",
      "Bamboo cutlery (for single use)",
    ],
    storage: ["Brown paper bags (for storing and composting food scraps)"],
  },
};

function BiodegradableChecklist() {
  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Biodegradable Checklist</h1>
      <p>
        Explore a list of foods and items that are biodegradable and
        environmentally friendly.
      </p>
      <div>
        {Object.keys(biodegradableChecklist).map((category) => (
          <div key={category} style={{ marginBottom: "20px" }}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            {Object.keys(biodegradableChecklist[category]).map((subCategory) => (
              <div key={subCategory} style={{ marginLeft: "20px" }}>
                <h3>
                  {subCategory.replace(/([A-Z])/g, " $1").replace(/^./, (str) =>
                    str.toUpperCase()
                  )}
                </h3>
                <ul>
                  {biodegradableChecklist[category][subCategory].map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BiodegradableChecklist;
