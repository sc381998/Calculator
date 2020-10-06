import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";

export default function App() {
  const handleClick = function (value) {
    // console.log("handleCLICL");
    let prevValue = expression.slice(expression.length - 1);
    if (typeof value === "string" && prevValue === "+") return;
    if (typeof value === "string" && prevValue === "-") return;
    if (typeof value === "string" && prevValue === "*") return;
    if (typeof value === "string" && prevValue === "/") return;
    const exp = expression.toString() + value;
    setExpression(exp);
  };
  const calculate = function () {
    // console.log("calculate");
    let prevValue = expression.slice(expression.length - 1);
    if (
      prevValue === "+" ||
      prevValue === "/" ||
      prevValue === "*" ||
      prevValue === "/"
    )
      return;
    try {
      setExpression(evaluate(expression));
    } catch {
      console.log("error");
    }
  };
  const clearExpression = function () {
    setExpression("");
  };

  const [expression, setExpression] = React.useState("");
  return (
    <div className="App">
      <div className="gameContainer">
        <div className="screenDisplay">{expression}</div>
        <div className="row">
          <button className="btn" onClick={() => clearExpression()}>
            C
          </button>
          <button className="btn" onClick={() => handleClick("(")}>
            (
          </button>
          <button className="btn" onClick={() => handleClick(")")}>
            )
          </button>
          <button className="operator" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleClick(9)}>
            9
          </button>
          <button className="btn" onClick={() => handleClick(8)}>
            8
          </button>
          <button className="btn" onClick={() => handleClick(7)}>
            7
          </button>
          <button className="operator" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleClick(6)}>
            6
          </button>
          <button className="btn" onClick={() => handleClick(5)}>
            5
          </button>
          <button className="btn" onClick={() => handleClick(4)}>
            4
          </button>
          <button className="operator" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleClick(3)}>
            3
          </button>
          <button className="btn" onClick={() => handleClick(2)}>
            2
          </button>
          <button className="btn" onClick={() => handleClick(1)}>
            1
          </button>
          <button className="operator" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div className="row">
          <button className="btn" onClick={() => handleClick(0)}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button className="btn" onClick={() => clearExpression()}>
            del
          </button>

          <button className="btn yellow" onClick={() => calculate()}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
