import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

let initialState = "";

const reduce = (state, action) => {
  return action.nextName;
};

const UseReduce = () => {
  const [text, dispatch] = useReducer(reduce, initialState);

  let handlesubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input
          type="name"
          onChange={(event) =>
            dispatch({ type: "name_change", nextName: event.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default UseReduce;
