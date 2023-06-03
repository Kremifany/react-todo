import React from "react";

const todoList = [];

todoList[0] = { id: "1", title: "Complete assignment" };
todoList[1] = { id: "2", title: "Upload to Github" };
todoList[2] = { id: "3", title: "Upload the link" };


function TodoList() {
  return (
    <ul>
      {todoList.map((item) => {
        return <li key={item.id.toString()}> {item.title}</li>;
      })}
    </ul>
  );
}
export default TodoList;
