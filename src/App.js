import React, { useState } from "react";
import './App.css';

const App = () => {
  const [ choices, setChoices ] = React.useState({
    choice1: "",
    choice2: "",
    choice3: "",
  });

  const handleChoiceInput = (input) => (e) => {
    setChoices({
      ...choices, [input]: e.target.value
    });
  }  

  const validateForm = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    if ( choices.choice1 == "calculus" || choices.choice2 == "calculus" || choices.choice3 == "calculus" ) {
      console.log("calculus found");
    } else {
      console.log("cannot proceed");
    }
  }   
  return (
    <div className="App">
      <form>
        <div className="form-1">
          <label>Choice 1</label> &nbsp;&nbsp;
          <input 
            type="text" 
            placeholder="Enter choice" 
            value={choices.choice1}
            onChange={handleChoiceInput("choice1")}
          />
        </div>
        <div className="form-2">
          <label>Choice 2</label> &nbsp;&nbsp;
          <input 
            type="text" 
            placeholder="Enter choice" 
            value={choices.choice2}
            onChange={handleChoiceInput("choice2")}
          />
        </div>
        <div className="form-3">
          <label>Choice 3</label> &nbsp;&nbsp;
          <input 
            type="text" 
            placeholder="Enter choice" 
            value={choices.choice3}
            onChange={handleChoiceInput("choice3")}
          />
        </div>
        <button 
          onClick={() => validateForm()}
          className="btn-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
