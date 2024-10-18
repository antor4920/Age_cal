import React, { useState } from "react";

function AddNewTask(props) {
  const [NewTask, setNewtask] = useState("");
  let OnChange = (event) => {
    setNewtask(event.target.value);
  };

  let Collecting = (event) => {
    event.preventDefault();
    props.OnCollectTask(NewTask);
  };

  return (
    <div>
      <form onSubmit={Collecting}>
        <label>Task</label>
        <input type="Text" onChange={OnChange}></input>
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddNewTask;
