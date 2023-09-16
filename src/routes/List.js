
import TodoList from "../components/ToDoList.js";
import { useState } from "react";
import style from "./List.module.css";

function List({ todoList, onRemoveTodo }) {
  const [sortAscending, setSortAscending] = useState(false);
  const handleSortItems = (sortAscending) => {
    console.log("inside handleSortAscending");
    setSortAscending(sortAscending);
  };

  todoList.sort((a, b) => {
    if (sortAscending)
      return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
    else return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });
  return (
    <>
    <h2>Todo List</h2>
      <TodoList
        todoList={todoList}
        onRemoveTodo={onRemoveTodo}
        handleSortItems={handleSortItems}
        sortAscending={sortAscending}
      />
    </>
  );
}
export default List;
