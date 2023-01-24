import React from "react";
import css from "./header.module.css";

export const Header = (props) => {
  return (
    <header className={css.header}>
      Todos ({props.compleateTodos}/{props.todosLen})
    </header>
  );
};

export default Header;
