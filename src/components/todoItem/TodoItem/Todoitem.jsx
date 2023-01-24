import React, { useState } from "react";
import css from "./todoitem.module.css";

function Todoitem({ status, title, ChangeStatus, id, deleteStatus, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);
  const handleChange = () => {
    ChangeStatus(id);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const submit = (event) => {
    event.preventDefault();
    onEdit(inputValue, id);
    setIsEdit(false);
  };

  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input
            className="inp1"
            value={inputValue}
            onChange={handleInput}
            type="text"
            placeholder="Enter todo here"
          />
          <button>Save✔</button>
        </form>
      ) : (
        <label className={css.left}>
          <input checked={status} onChange={handleChange} type="checkbox" />
          <p className={status ? css.complate : ""}>{title}</p>
        </label>
      )}

      <div className={css.right}>
        <button onClick={handleEdit} className={css.button}>
          Edit
        </button>
        <button
          onClick={() => deleteStatus(id)}
          className={`${css.button} ${css.button_del}`}
        >
          Del
        </button>
      </div>
    </div>
  );
}

export default Todoitem;
