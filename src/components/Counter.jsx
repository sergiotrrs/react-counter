import React from "react";
import '../styles/Buttons.css';
import '../styles/Counter.css';
import { useState } from "react";
import { ButtonGen } from "./ButtonGen";

export const Counter = ({ initialValue }) => {
  //console.log("Incremental Counter");
  const [number, setNumber] = useState(initialValue);

  const resetCounter = () => {
    setNumber(0);
  };
  const incrementCounter = () => {
    setNumber(number+1);
  };
  const decrementCounter = () => {
    setNumber(number-1);
  };

  return (
    <>
      <h1>Counter</h1>
      <p className="counter">{number}</p>
      <ButtonGen className="button-clic" onClick={incrementCounter}>+</ButtonGen>
      <ButtonGen className="button-clic" onClick={decrementCounter}>-</ButtonGen>
      <ButtonGen className="button-reset" onClick={resetCounter}>Reset</ButtonGen>
    </>
  );
};
