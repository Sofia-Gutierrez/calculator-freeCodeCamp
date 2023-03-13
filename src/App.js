import "./assets/css/App.css";
import React from "react";
import { useState } from "react";
import freeCodeCampLogo from "./assets/img/freecodecamp-logo.png";
import Button from "./components/Button";
import ClearButton from "./components/ClearButton";
import Input from "./components/Input";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const addInput = value => {
    setInput(input + value);
  };

  const calculateResult = () => {
    if(input) {
      setInput(evaluate(input));
    };
  }


  return (
    <div className="App">
      <div className="container-freecodecamp-logo">
          <img 
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de freeCodeCamp" />
        </div>
        <div className="container-calculator">
          <Input input={input} />
          <div className="row">
            <Button handleClick={addInput}>1</Button>
            <Button handleClick={addInput}>2</Button>
            <Button handleClick={addInput}>3</Button>
            <Button handleClick={addInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={addInput}>4</Button>
            <Button handleClick={addInput}>5</Button>
            <Button handleClick={addInput}>6</Button>
            <Button handleClick={addInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={addInput}>7</Button>
            <Button handleClick={addInput}>8</Button>
            <Button handleClick={addInput}>9</Button>
            <Button handleClick={addInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={addInput}>0</Button>
            <Button handleClick={addInput}>.</Button>
            <Button handleClick={addInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
          </div>
        </div>
    </div>
  );
}

export default App;
