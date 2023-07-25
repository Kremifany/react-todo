import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css"

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  const handleTitleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    onAddTodo({ title: todoTitle });
    setTodoTitle("");
  };

  return (
    <form className={style.InputForm} onSubmit={handleAddTodo}>
      <InputWithLabel className={style.InputWithLabel}
        id="todoTitle"
        name="title"
        value={todoTitle}
        isFocused
        onChange={handleTitleChange}
        placeholder="Enter task"
      >
        <strong>Title:</strong>
      </InputWithLabel>

      <button disabled={todoTitle === ""}>Add</button>
    </form>
  );
}
export default AddTodoForm;
