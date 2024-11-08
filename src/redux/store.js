import { configureStore } from "@reduxjs/toolkit";
import { todosSlice } from "./store/todos";

export default configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
