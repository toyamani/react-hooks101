import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>count:{count}</div>
      <button onClick={increment}>+1</button>
    </>
  );
};

export default App;
