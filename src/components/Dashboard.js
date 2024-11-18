import React, { useState } from "react";

const onboardingQuestions = [
  {
    section: "Personal Information",
    questions: [
      { text: "What is your name?", type: "text" },
      { text: "What is your age?", type: "number" }
    ]
  },
  {
    section: "Preferences",
    questions: [
      {
        text: "What is your favorite color?",
        options: ["Red", "Green", "Blue", "Yellow"]
      },
      {
        text: "Do you prefer cats or dogs?",
        options: ["Cats", "Dogs"]
      }
    ]
  },
  {
    section: "Hobbies and Interests",
    questions: [
      { text: "What are your hobbies?", type: "text" },
      {
        text: "Which activities do you enjoy?",
        options: ["Reading", "Gaming", "Sports", "Music", "Travel"]
      }
    ]
  }
];

const Questionnaire = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionText, value) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionText]: value
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", answers);
    alert("Answers submitted!");
  };

  return (
    <div>
      <h2>Personalized Dashboard Setup</h2>
      {onboardingQuestions.map(section => (
        <div key={section.section}>
          <h3>{section.section}</h3>
          {section.questions.map(question => (
            <div key={question.text}>
              <label>{question.text}</label>
              {question.options ? (
                question.options.map(option => (
                  <div key={option}>
                    <input
                      type="radio"
                      name={question.text}
                      value={option}
                      onChange={e => handleChange(question.text, e.target.value)}
                    />
                    <label>{option}</label>
                  </div>
                ))
              ) : (
                <input
                  type={question.type || "text"}
                  onChange={e => handleChange(question.text, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Questionnaire;
