import React, { useContext } from "react";

import { Context } from "./UserContext";

const Child2 = () => {
  const Obj = useContext(Context);

  console.log(Obj);
  return <div></div>;
};

export default Child2;
