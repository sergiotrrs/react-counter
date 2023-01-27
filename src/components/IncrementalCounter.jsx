import React from "react";
import { useState } from "react";

export const Counter = ({ initialValue }) => {
  console.log("Incremental Counter");
  const [number, setNumber] = useState(initialValue);

  const resetCounter = () => {
    setNumber(0);
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setNumber(number - 1)}>-1</button>
      <button onClick={resetCounter}>Reset</button>
    </>
  );
};
