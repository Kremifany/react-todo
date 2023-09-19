import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

import remove from "./assets/icons8-trash-24.png";
function TodoListItem({ todo, onRemoveTodo }) {
  return (
    <li className={styles.ListItem}>
      {todo.title}
      <button
        className={styles.removeButton}
        onClick={() => onRemoveTodo(todo.id)}
      >
        Remove
        <img src={remove} alt="removet" />
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    createdTime: PropTypes.string.isRequired,
  }),
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
