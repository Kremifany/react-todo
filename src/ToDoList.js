import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [];

todoList[0] = { id: "1", title: "Complete assignment" };
todoList[1] = { id: "2", title: "Upload to Github" };
todoList[2] = { id: "3", title: "Upload the link" };


function TodoList() {
  return (
    <ul>
      todoList.map((item) => {
        </TodoListItem>;
      })
    </ul>
  );
}
export default TodoList;
