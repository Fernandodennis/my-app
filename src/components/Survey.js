import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Survey = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    // Add other fields as necessary
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log('Survey Submitted:', formData);
    alert('Thank you for completing the survey!');
  };

  return (
    <div>
      <h1>Waste Management Survey</h1>
      <form>
        <div>
          <label htmlFor="name">What is your name?</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more form fields for your survey */}
        <div>
          <button type="button" onClick={() => navigate(-1)}>Go Back</button>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Survey;
