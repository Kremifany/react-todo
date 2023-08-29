import React from "react";
import style from "./TodoListItem.module.css";

import remove from "./assets/icons8-trash-24.png";
function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={style.ListItem}>
      {todo.title}
      <button
        className={style.removeButton}
        onClick={() => onRemoveTodo(todo.id)}
      >
        Remove
        <img src={remove} alt="removet" />
      </button>
    </li>
  );
}

export default TodoListItem;
