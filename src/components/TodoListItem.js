import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

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
TodoListItem.propTypes = {
  todo: PropTypes.shape({ id: PropTypes.string, title: PropTypes.string }),
};
export default TodoListItem;
