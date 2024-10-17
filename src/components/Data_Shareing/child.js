import React from "react";

function Child(props) {
  let data = "I am a text form child";
  props.onMethod(data);
  return (
    <div>
      <p>Child: {props.onMasses}</p>
    </div>
  );
}
export default Child;
