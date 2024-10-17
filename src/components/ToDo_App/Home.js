import React, { useState } from "react";

import TodoMapping from "./TodoMapping";
import New_Todo from "./New_Todo";

const Todo_list = ["Task1", "Task2"];
function Home() {
  const [TaskName, set_New_Task_To_List] = useState(Todo_list);

  const AddNewTask = (task) => {
    set_New_Task_To_List([...TaskName, task]);
    console.log(task);
  };

  return (
    <div>
      <New_Todo newTask={AddNewTask} />
      <TodoMapping Todo={TaskName} />
    </div>
  );
}
export default Home;
