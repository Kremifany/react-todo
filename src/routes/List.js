import { useState } from "react";
import styles from "./List.module.css";
import React from "react";
import TodoListItem from "../components/TodoListItem";
import PropTypes from "prop-types";

function List({ todoList, onRemoveTodo }) {
  const [createdTimeSortAscending, setCreatedTimeSortAscending] =
    useState(false);
  const [titleSortAscending, setTitleSortAscending] = useState(false);
  const [currentSortBy, setCurrentSortBy] = useState("title");

  const handleSortItems = (sortAscending, currentSortBy) => {
    console.log("inside handleSortItems");
    if (currentSortBy === "createdTime") {
      setCurrentSortBy("createdTime");
      setCreatedTimeSortAscending(sortAscending);
    } else {
      setCurrentSortBy("title");
      setTitleSortAscending(sortAscending);
    }
  };

  if (currentSortBy === "createdTime") {
    todoList.sort((a, b) => {
      if (createdTimeSortAscending)
        return a.createdTime < b.createdTime
          ? 1
          : a.createdTime > b.createdTime
          ? -1
          : 0;
      else
        return a.createdTime < b.createdTime
          ? -1
          : a.createdTime > b.createdTime
          ? 1
          : 0;
    });
  } else {
    todoList.sort((a, b) => {
      if (titleSortAscending)
        return a.title < b.title ? 1 : a.title > b.title ? -1 : 0;
      else return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
    });
  }
  return (
    <>
      <h2>Todo List</h2>
      <h3>Sort By</h3>

      <div>
        {createdTimeSortAscending ? (
          <button
            className={styles.button}
            onClick={() => handleSortItems(false, "createdTime")}
          >
            Date Asc
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => handleSortItems(true, "createdTime")}
          >
            Date Desc
          </button>
        )}
      </div>

      <div>
        {titleSortAscending ? (
          <button
            className={styles.button}
            onClick={() => handleSortItems(false, "title")}
          >
            Todo A to Z
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => handleSortItems(true, "title")}
          >
            Todo Z to A
          </button>
        )}
      </div>

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
List.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      createdTime: PropTypes.string.isRequired,
    })
  ),
  onRemoveTodo: PropTypes.func,
};
export default List;
