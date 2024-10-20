import React, { useState } from "react";
import style from "./Toggle.module.css";

const Toggle = () => {
  let para =
    "My name is antor. I am form narsingdi,dhaka. I have done my Bachelor from mmdu.";
  const [toggle, settoggle] = useState(false);

  return (
    <div className={style.mainDiv}>
      <p>{toggle && para}</p>
      <button
        className={style.btn}
        onClick={() => {
          settoggle(!toggle);
        }}
      >
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default Toggle;
