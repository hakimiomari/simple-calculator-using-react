import React, { useState } from "react";
import "./app.css";

const Calc = () => {
  const [buttonValue, setButtonValue] = useState("");

  const handleButtonClick = (event) => {
    const value = event.target.textContent;
    setButtonValue(buttonValue.concat(value));
  };
  const handleEqualClick = () => {
    try {
      const calculatedValue = eval(buttonValue).toString();
      setButtonValue(calculatedValue);
    } catch (e) {
      setButtonValue("Error");
    }
  };

  const removeCharacter = () => {
    const removeCharacterValue = buttonValue.slice(0, -1);
    setButtonValue(removeCharacterValue);
  };

  const clearValue = () => {
    setButtonValue("");
  };
  return (
    <div className="body">
      <div className="calc">
        <div className="header">
          <input type="text" disabled value={buttonValue} />
        </div>
        <div className="buttons">
          <div className="btn clear">
            <button onClick={clearValue} className="btnClear">
              Clear
            </button>
          </div>
          <div className="btn">
            <button onClick={removeCharacter} className="button">
              C
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              /
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              1
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              2
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              3
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              +
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              4
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              5
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              6
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              -
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              7
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              8
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              9
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              *
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              0
            </button>
          </div>
          <div className="btn">
            <button onClick={handleButtonClick} className="button">
              .
            </button>
          </div>
          <div className="equalBtn">
            <button onClick={handleEqualClick} className="btnClear">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
