import React from "react";
import TodoListItem from "./TodoListItem";
import style from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={style.list}>
      {todoList.map((item) => {
        console.log(`inside todoList with ${item.id}, ${item.title}`);
        return (
          <>
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          </>
        );
      })}
    </ul>
  );
}
export default TodoList;
