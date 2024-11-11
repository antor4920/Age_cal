import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

let initialState = { name: "", password: 0 };
const reduce = (state, action) => {
  switch (action.type) {
    case "Name_text": {
      return { ...state, name: action.NextName, password: state.password };
    }
    case "password_text": {
      return { ...state, name: state.name, password: action.NextPass };
    }
  }
};

// const Display = (props) => {
//   return (
//     <div>
//       <h3>{props.name} </h3>
//       <p> </p>
//     </div>
//   );
// };
const UseReduce = () => {
  const [text, dispatch] = useReducer(reduce, initialState);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(event) =>
            dispatch({ type: "Name_text", NextName: event.target.value })
          }
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          onChange={(event) =>
            dispatch({ type: "password_text", NextPass: event.target.value })
          }
        />
      </div>
      <button>Add Name</button>
    </form>
  );
};

export default UseReduce;
