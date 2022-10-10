import { useState } from "react";

function App() {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");
  const operator = ["/", "*", "-", ".", "+"];

  const updateCal = (value) => {
    if (
      // this conditional prevents adding multiple operator sign to a single digit
      (operator.includes(value) && cal === "") ||
      (operator.includes(value) && operator.includes(cal.slice(-1)))
    ) {
      return;
    }
    setCal(cal + value);

    if (!operator.includes(value)) {
      setResult(eval(cal + value).toString());
    }
  };

  //Creating a function that adds numbers 1-9
  const createNumbers = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button onClick={() => updateCal(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };

  const calculate = () => {
    setCal(eval(cal).toString());
  };

  const deleteBtn = () => {
    if (cal === "") {
      return;
    }
    const value = cal.slice(0, -1);
    setCal(value);
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span></span> : ""} &nbsp;
          {cal || 0}
        </div>

        <div className="operators">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("*")}>*</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={() => updateCal("-")}>-</button>
          <button onClick={deleteBtn}>DEL</button>
        </div>

        <div className="numbers">
          {/* the createNumbers function is used to avoid duplicating 10 btns for 1-9 */}
          {createNumbers()}
          <button onClick={() => updateCal("0")}>0</button>
          <button onClick={() => updateCal(".")}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
      <div className="footer">Created by @BrightIortsor &copy;2022</div>
    </div>
  );
}

export default App;
