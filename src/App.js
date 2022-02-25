import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [valueTodo, setValueTodo] = useState("");
  const [currentTodo, setCurrentTodo] = useState([]);

  const handleChangeTodo = (e) => {
    const todo = e.target.value;
    setValueTodo(todo);
  }

  const saveTodo = () => {
    setCurrentTodo([
      ...currentTodo,
      valueTodo
    ])
    setValueTodo("")
  }

  const removeTodo = (index) => {
    setCurrentTodo(currentTodo.filter((item, currentIndex) => currentIndex !== index));

  }

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="flex">
        <input type="text" name="todo" value={valueTodo} onChange={(e) => handleChangeTodo(e)} className="input-todo"/>
        <button onClick={() => saveTodo()}>SAVE</button>
      </div>
      <Card todo={currentTodo} handleRemoveTodo={removeTodo}/>
    </div>
  )
}

export default App;