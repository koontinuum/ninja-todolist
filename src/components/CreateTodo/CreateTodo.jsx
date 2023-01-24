import React from "react";
import { useState } from "react";

export const CreateTodo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const submit = (event) => {
    event.preventDefault();
    if (props.todosLen < 10) {
      props.onAddTodo(inputValue);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={submit}>
      <input
        placeholder="Enter todo here"
        className="inp"
        value={inputValue}
        onChange={handleChange}
        type="text"
      ></input>
      <button className="btn">+Submit</button>
    </form>
  );
};

export default CreateTodo;
