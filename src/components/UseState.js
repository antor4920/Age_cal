import React, { useState } from "react";

function UseState() {
  const [count, setcount] = useState(0);

  const ChangeNum = () => {
    setcount(count + 1);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button className="border-2 border-gray-500" onClick={ChangeNum}>
        Increment
      </button>
    </div>
  );
}

export default UseState;
