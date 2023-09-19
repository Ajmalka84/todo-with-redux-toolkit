import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), todo : action.payload, completed: false });
    },
    completedTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo : (state, action)=> {
      return state.filter((todo) => todo.id !== action.payload);
    }
  },
});

export const { addTodo, completedTodo , deleteTodo} = TodoSlice.actions;

export default TodoSlice.reducer;
