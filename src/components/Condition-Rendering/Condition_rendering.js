import React from "react";
import Home from "./Home";
import Login from "./Login";

function Condition_rendering() {
  const page = false;

  return <div>{page ? <Home /> : <Login />}</div>;
}

export default Condition_rendering;
