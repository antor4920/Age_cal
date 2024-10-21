import React, { useState } from "react";

function UseState_Hook() {
  const [Number, setNumber] = useState(0);

  let ChangeValue = () => {
    setNumber(Number + 1);
  };
  return (
    <div>
      <h1>NUmber: {Number}</h1>
      <button onClick={ChangeValue}>Increase</button>
    </div>
  );
}

export default UseState_Hook;
