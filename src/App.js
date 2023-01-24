//Nurbolot Bazarbaev - TodoList ✔

import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/header/header";
import Todoitem from "./components/todoItem/TodoItem/Todoitem";
import CreateTodo from "./components/CreateTodo/CreateTodo";

function App() {
  const todosLocal = JSON.parse(localStorage.getItem("todos")) || []
  const [todos, setTodos] = useState(todosLocal)
  const [loading, setLodaing] = useState(true)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const addTodo = (str) => {
    setTodos([...todos, { text: str, status: false, id: Date.now() }])
  }

  const ChangeStatus = (id) => {
    const newArr = todos.map((item) => {
      console.log(item.id, id);
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    });
    console.log(newArr)
    setTodos(newArr)
  }

  const deleteStatus = (id) => {
    const newArray = todos.filter((elem) => elem.id !== id)
    setTodos(newArray)
  }

  const editTodo = (newText, id) => {
    const newArr = todos.map((item) => {
      if (item.id === id) {
        return { ...item, text: newText }
      }
      return item
    })
    setTodos(newArr)
  }

  const newTodos = todos.map((elem) => (
    <Todoitem
      key={elem.id}
      ChangeStatus={ChangeStatus}
      deleteStatus={deleteStatus}
      title={elem.text}
      status={elem.status}
      onEdit={editTodo}
      id={elem.id} />));

  useEffect(() => {
    setTimeout(() => {
      setLodaing(false)
    }, 2500)
  }, [])

  if (loading) {
    return <div id="Preloader">
      <img src="Spinner-2.gif" alt="" />
    </div>
  }
  const result = todos.reduce((akk, item) => akk + item.status, 0)
  return (
    <div className="App">
      <Header todosLen={todos.length} compleateTodos={result} />
      <CreateTodo onAddTodo={addTodo} todosLen={todos.length} />
      <div className="todo-list">{newTodos.length ? newTodos : <h2>Please add todo</h2>}</div>
    </div>
  );
}

export default App;