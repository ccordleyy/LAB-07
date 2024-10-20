import { useState } from "react";

export const Button = () => {
    const [count, setCount] = useState(0);
  
    return (
      <button onClick={() => setCount(count + 5)}>
        Clicks: {count}
      </button>
    );
  };