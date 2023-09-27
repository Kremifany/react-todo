import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./routes/List";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const postTodo = async (todo) => {
    try {
      const airtableData = {
        records: [
          {
            fields: {
              title: todo,
            },
          },
        ],
      };

      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          },
          body: JSON.stringify(airtableData),
        }
      );

      if (!response.ok) {
        const message = `Error has ocurred:
                             ${response.status}`;
        throw new Error(message);
      }

      const dataResponse = await response.json();
      return dataResponse;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  const addTodo = async (newTodo) => {
    const response = await postTodo(newTodo.title);
    if (!response) {
      alert("error occured during adding new Item");
      return;
    }
    newTodo.id = response.records[0].id;
    newTodo.createdTime = response.records[0].createdTime;
    setTodoList([...todoList, newTodo]);
    fetchData();
  };

  async function fetchData() {

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;
    //?view=Grid%20view&sort[0][field]=title&sort[0][direction]=desc//sorting with url implemented here
    console.log(url);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title,
          createdTime: todo.createdTime,
        };
        return newTodo;
      });

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    async function rand () {
    setIsLoading(true);
    setTimeout(()=>{})
    await fetchData();
    setIsLoading(false);
    }
    rand();
  }, []);

    // useEffect(() => {
    //   async function rand() {
    //     setIsLoading(true);
    //     setTimeout(async () => {
    //       await fetchData();
    //       setIsLoading(false);
    //     }, 1500);
    //   }
    //   rand();
    // }, []); 

  async function removeTodo(id) {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      console.log(data);
      fetchData();
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log("before the routes");
  return (
    <>
      <h1>Todo App</h1>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<div></div>}></Route>
          <Route
            path="/add"
            element={
              <>
                <h2>Add New Todo</h2>
                <AddTodoForm onAddTodo={addTodo} />
              </>
            }
          ></Route>
          <Route
            path="/list"
            element={
              isLoading ? (
                <p>Loading ...</p>
              ) : (
                <List todoList={todoList} onRemoveTodo={removeTodo}></List>
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
