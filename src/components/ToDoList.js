import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";

function TodoList({ todoList, onRemoveTodo, handleSortItems, sortAscending }) {
  console.log({ sortAscending });
  return (
    <>
      {sortAscending ? (
        <div>
          <button
            className={style.button}
            onClick={() => handleSortItems(false)}
          >
            Z to A
          </button>
        </div>
      ) : (
        <div>
          <button
            className={style.button}
            onClick={() => handleSortItems(true)}
          >
            A to Z
          </button>
        </div>
      )}
      <ul>
        {todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              todo={item}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
////////////////////////////////////////////////warning/error
// TodoList.propTypes = {
//   todoList: PropTypes.arrayOf(PropTypes.object),
//   onRemoveTodo: PropTypes.func,
// };

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onRemoveTodo: PropTypes.func,
  handleSortItems: PropTypes.func,
  sortAscending: PropTypes.bool,
};

export default TodoList;
