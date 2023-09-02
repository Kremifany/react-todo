import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

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
TodoList.propTypes = {
  todoList: PropTypes.arrayOf({ TodoListItem }),
};
export default TodoList;
