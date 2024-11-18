import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    familyNumber: "",
    wastePreference: "",
    currentManagement: "",
    challenges: "",
    separationFrequency: "",
    wasteTypes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitSurvey = () => {
    console.log("Survey Submitted", formData);
    alert("Thank you for completing the survey!");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Waste Management Survey</h1>
      <form>
        {/* Name */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            What is your name?
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          />
        </div>
        {/* Household size */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="familyNumber" style={{ display: "block", marginBottom: "5px" }}>
            How many people are in your household?
          </label>
          <select
            id="familyNumber"
            name="familyNumber"
            value={formData.familyNumber}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="1">1</option>
            <option value="2-3">2-3</option>
            <option value="4-5">4-5</option>
            <option value="5+">More than 5</option>
          </select>
        </div>
        {/* Waste management preference */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="wastePreference" style={{ display: "block", marginBottom: "5px" }}>
            Do you prefer daily, weekly, or monthly waste management?
          </label>
          <select
            id="wastePreference"
            name="wastePreference"
            value={formData.wastePreference}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        {/* Current waste management */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="currentManagement" style={{ display: "block", marginBottom: "5px" }}>
            How do you currently manage waste at home?
          </label>
          <select
            id="currentManagement"
            name="currentManagement"
            value={formData.currentManagement}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="separation">Separate recyclable and non-recyclable items</option>
            <option value="composting">Compost food waste</option>
            <option value="collection">Use a waste collection service</option>
            <option value="none">No specific system</option>
          </select>
        </div>
        {/* Challenges */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="challenges" style={{ display: "block", marginBottom: "5px" }}>
            What challenges do you face when trying to reduce waste?
          </label>
          <select
            id="challenges"
            name="challenges"
            value={formData.challenges}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="time">Lack of time</option>
            <option value="recyclableKnowledge">Uncertainty about what is recyclable</option>
            <option value="space">Lack of space for separate bins</option>
            <option value="localSupport">Not enough local support</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Frequency of separating waste */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="separationFrequency" style={{ display: "block", marginBottom: "5px" }}>
            How frequently do you separate recyclable and non-recyclable waste?
          </label>
          <select
            id="separationFrequency"
            name="separationFrequency"
            value={formData.separationFrequency}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="always">Always</option>
            <option value="often">Often</option>
            <option value="occasionally">Occasionally</option>
            <option value="rarely">Rarely</option>
            <option value="never">Never</option>
          </select>
        </div>
        {/* Waste types */}
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="wasteTypes" style={{ display: "block", marginBottom: "5px" }}>
            What types of waste do you dispose of most often?
          </label>
          <select
            id="wasteTypes"
            name="wasteTypes"
            value={formData.wasteTypes}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "10px",
            }}
          >
            <option value="">Select...</option>
            <option value="food">Food waste</option>
            <option value="plastic">Plastic packaging</option>
            <option value="paper">Paper/cardboard</option>
            <option value="glass">Glass</option>
            <option value="hazardous">Hazardous materials</option>
          </select>
        </div>
        {/* Buttons */}
        <div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              color: "black",
              border: "none",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Go Back
          </button>
          <button
            type="button"
            onClick={submitSurvey}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Survey;
