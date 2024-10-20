import React, { useState } from 'react';

const RandomComponent = () => {
  const [count, setCount] = useState(10);

  const resetCount = () => {
    setCount(0);
  };

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Random Component</h2>
      <p>Count: {count}</p>
      <button onClick={resetCount}>Reset</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default RandomComponent;
