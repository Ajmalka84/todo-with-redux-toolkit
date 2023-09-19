// src/App.js
import React, { createContext, useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";
// export const Context = createContext();
function App() {
  // const [todos, setTodos] = useState([]);
  return (
    // <Context.Provider value={{ todos , setTodos}}>
    <Provider store={store}>
      <div className="container mx-auto p-4 space-y-3">
        <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
        <Todo />
        <TodoList />
      </div>
    </Provider>
    // </Context.Provider>
  );
}

export default App;
