import React, { useState } from "react";
import './App.css';

const App = () => {
  const [ choices, setChoices ] = React.useState({
    choice1: "",
    choice2: "",
    choice3: "",
  });
  const [ errorMessage, setErrorMessage ] = React.useState("");
  const [ successMessage, setSuccessMessage ] = React.useState("");

  const handleChoiceInput = (input) => (e) => {
    setChoices({
      ...choices, [input]: e.target.value
    });
  }  

  const validateForm = (e) => {
    e.preventDefault();
    // e.stopPropagation();
      if ( choices.choice1 == "calculus" || choices.choice2 == "calculus" || choices.choice3 == "calculus" ) {
        setSuccessMessage("Calculus was selected")
    } else {
      setErrorMessage("Calculus must be selected")
    }
  }   
  return (
    <div className="App">
      <form>
        <p>{errorMessage}</p>
        <p>{successMessage}</p>
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
          onClick={(e) => validateForm(e)}
          className="btn-submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
