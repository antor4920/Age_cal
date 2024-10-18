import React, { useState } from "react";

import TaskMapping from "./TaskMapping";
import AddNewTask from "./AddNewTask";

const Task_list = [];

function Main_page() {
  const [Task, setTask] = useState(Task_list);

  let CollectTask = (T) => {
    setTask([...Task, T]);
  };

  return (
    <div>
      <AddNewTask OnCollectTask={CollectTask} />
      <TaskMapping Task_list={Task} />
    </div>
  );
}
export default Main_page;
