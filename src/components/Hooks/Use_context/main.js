import React from "react";

import { Context } from "./UserContext";
import Child1 from "./child1";

const Main = () => {
  const Name = ["antor", "ali"];

  return (
    <div>
      <Context.Provider value={Name}>
        <Child1 />
      </Context.Provider>
    </div>
  );
};

export default Main;
