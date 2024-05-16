import React, { useState } from "react";
import "./App.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <h1>To-Do List</h1>
      <div className="">
        <input
          type="text"
          placeholder="Enter your task"
          value={inputValue}
          onChange={handleInputChange}
          class="mb-4"
        />
        
        <button class="btn btn-primary"onClick={addTodo}>Add</button>
      </div>
      <ul class="list-group">
        {todos.map((todo, index) => (
          <li class="list-group-item" key={index}>
            {todo}
            <button class="btn btn-warning" id="btn-delete" onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
