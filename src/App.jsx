// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Input from "./components/Input.jsx";
import Todo from "./components/Todo.jsx";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [todos, setTodos] = useState([]);

  function writetodo(e) {
    setInputVal(e.target.value);
  }

  function addTodo() {
    if (inputVal.trim() !== "") {
      setTodos((prevTodos) => [...prevTodos, inputVal]);
      setInputVal("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }

  return (
    <>
      <h1 className="h11">To-Do List</h1>
      <form className="form">
        <Input inputVal={inputVal} writetodo={writetodo} addtodo={addTodo} />
        <Todo todos={todos} delTodo = {delTodo}/>
      </form>
    </>
  );
}

export default App;
