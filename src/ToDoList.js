import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((item) => {
        console.log(item.id, item.title);
        return <TodoListItem key={item.id} todo={item} />;
      })}
    </ul>
  );
}
export default TodoList;
