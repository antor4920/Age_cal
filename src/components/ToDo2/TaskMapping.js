import React from "react";

function TaskMapping(props) {
  return (
    <div>
      {props.Task_list.map((x, index) => (
        <p key={index}>{x}</p>
      ))}
    </div>
  );
}
export default TaskMapping;
