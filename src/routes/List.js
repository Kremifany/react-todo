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
    switch (currentSortBy) {
      case "createdTime": {
        setCurrentSortBy("createdTime");
        setCreatedTimeSortAscending(sortAscending);
        break;
      }
      case "title": {
        setCurrentSortBy("title");
        setTitleSortAscending(sortAscending);
        break;
      }
      default:
        return;
    }
  };

  if (currentSortBy === "createdTime") {
    todoList.sort((a, b) => {
      console.log(a.createdTime);
      if (createdTimeSortAscending)
        return a.createdTime <= b.createdTime ? 1 : -1;
      else return a.createdTime < b.createdTime ? -1 : 1;
    });
  } else {
    todoList.sort((a, b) => {
      if (titleSortAscending) return a.title <= b.title ? 1 : -1;
      else return a.title < b.title ? -1 : 1;
    });
  }
  return (
    <>
      <h1>Todo List</h1>
      <h3>Sort By</h3>
      <div className={styles.divb}>
        <button
          className={styles.button}
          onClick={() =>
            handleSortItems(!createdTimeSortAscending, "createdTime")
          }
        >
          Date {createdTimeSortAscending ? "Asc" : "Desc"}
        </button>
      </div>
      <div>
        <button
          className={styles.button}
          onClick={() => handleSortItems(!titleSortAscending, "title")}
        >
          Todo {titleSortAscending ? "A to Z" : "Z to A"}
        </button>
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
