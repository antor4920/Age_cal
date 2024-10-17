import React from "react";

import TodoMapping_2 from "./TodoMapping_2";
function TodoMapping(props) {
  return (
    <div>
      {props.Todo.map((X, index) => (
        <TodoMapping_2 key={index} OnTodo={X} />
      ))}
    </div>
  );
}
export default TodoMapping;
