import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./ToDoList";
import { useEffect } from "react";

const useSemiPersistantState = () => {
  const [todoList, setTodoList] = React.useState(
    JSON.parse(localStorage.getItem("savedTodoList") || "[]", [])
  );
  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    console.log(`inside app.js use effect`);
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);

  const [todoList, setTodoList] = useSemiPersistantState();

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
