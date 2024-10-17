import React, { useState } from "react";

function New_Todo(props) {
  const [todo, settodo] = useState("");

  let NewTask = (T) => {
    settodo(T.target.value);
  };
  let taskSubmit = (event) => {
    event.preventDefault();
    props.newTask(todo);
  };

  return (
    <div>
      <form onSubmit={taskSubmit}>
        <label>Task Name</label>
        <input type="Text" onChange={NewTask}></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
}
export default New_Todo;
