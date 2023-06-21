import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => {
        console.log(`inside todoList with ${item.id}, ${item.title}`);
        return (
          <TodoListItem key={item.id} todo={item} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
}
export default TodoList;
