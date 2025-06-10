// Todo.jsx
import React from "react";
import Todospawn from "./Todospawn";

function Todo({ todos, delTodo}) {
  return (
    <div className="container">
      {Array.isArray(todos) && todos.map((todoItem, index) => {
        return (
          <Todospawn key={index} todo={todoItem} index= {index} delTodo = {delTodo}/>
        );
      })}
    </div>
  );
}

export default Todo;