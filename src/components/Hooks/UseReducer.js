import React, { useReducer } from "react";

let initialState = 0;

const reduce = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "dicrement":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [Count, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <h1>Counter : {Count}</h1>
      <button
        onClick={() => dispatch("increment")}
        disabled={Count === 10 ? true : false}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch("dicrement")}
        disabled={Count === -5 ? true : false}
      >
        dicrement
      </button>
    </div>
  );
};

export default UseReducer;
