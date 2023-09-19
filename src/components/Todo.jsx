import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../reducers/TodoReducer";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleTodo = () => {
    dispatch(addTodo(todo));
    setTodo("");
  };
  console.log(todos)
  return (
    <div>
      <input
        type="text"
        className="bg-gray-100 border rounded-lg border-slate-950 p-2 mr-4"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="bg-green-500 text-white p-2 rounded-lg font-semibold border-2 border-green-700 hover:bg-green-600"
        onClick={handleTodo}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Todo;
