import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload.title) {
        return;
      }
      state.push(action.payload);
      return state;
    },
    removeTodo: (state, action) => {
      state = state?.filter((todo) => todo.id !== action.payload);
      return state;
    },
    toggleCompletedTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    },
    editTodo: (state, action) => {
      console.log(action.payload);
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, toggleCompletedTodo, editTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
