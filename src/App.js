import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./ToDoList";

function App() {
  const addTodo = (newTodo) => setTodoList([...todoList, newTodo]);

  const [todoList, setTodoList] = React.useState([]);
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
