import React from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";
import PropTypes from "prop-types";

import { useNavigate } from "react-router-dom";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  const navigate = useNavigate();
  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle });
    setTodoTitle("");
    navigate("/list", { replace: true });
  };

  return (
    <form className={styles.InputForm} onSubmit={handleAddTodo}>
      <InputWithLabel
        className={styles.InputWithLabel}
        id="todoTitle"
        name="title"
        value={todoTitle}
        isFocused
        onChange={handleTitleChange}
        placeholder="Enter task"
      >
        <strong>Title:</strong>
      </InputWithLabel>

      <button className={styles.addButton} disabled={todoTitle === ""}>
        Add
      </button>
    </form>
  );
}
AddTodoForm.propTypes = { onAddTodo: PropTypes.func };
export default AddTodoForm;
