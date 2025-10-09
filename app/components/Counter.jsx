// File: components/Counter.js
'use client';
import { useState } from "react";

function Counter() {
  // count = current value
  // setCount = function to update it
  const [count, setCount] = useState(0);

  // Function to increase count by 1
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };


  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={decrease}>Decrease</button>
      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default Counter;
