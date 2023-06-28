import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./ToDoList";
import { useEffect, useState } from "react";

// const useSemiPersistantState = () => {
//   const [todoList, setTodoList] = React.useState(
//     JSON.parse(localStorage.getItem("savedTodoList") || "[]", [])
//   );

function App() {
  const addTodo = (newTodo) => {
    console.log("inside addTodo");
    setTodoList([...todoList, newTodo]);
  };

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(
              localStorage.getItem("savedTodoList") || "[]",
              []
            ),
          },
        });
      }, 2000);
    })
      .then((result) => {
        setTodoList(result.data.todoList);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const removeTodo = (id) => {
    const newToDoList = todoList.filter((listItem) => listItem.id !== id);
    setTodoList(newToDoList);
    console.log(`inside removeTodo with id = ${id}`);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {isError && <p>Something went wrong ...</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </>
  );
}

export default App;
