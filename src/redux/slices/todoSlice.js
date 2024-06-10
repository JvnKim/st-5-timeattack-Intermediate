import { createSlice } from "@reduxjs/toolkit";

// TODO: todoSlice 를 작성하세요.
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ ...action.payload, id: Date.now(), isDone: false });
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
