import { createSlice } from "@reduxjs/toolkit";

let data = JSON.parse(localStorage.getItem("todos"));
const todosSlice = createSlice({
  name: "users",
  initialState: data ? data : [],
  reducers: {
    todoAdded(state, action) {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    todoUpdated(state, action) {
      const { id, title, description, date, pioriry } = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);
      if (currentTodo) {
        currentTodo.title = title;
        currentTodo.description = description;
        currentTodo.date = date;
        currentTodo.pioriry = pioriry;
      }
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    todoDeleted(state, action) {
      const id = action.payload;
      const currentTodo = state.find((todo) => todo.id === id);
      if (currentTodo) {
        state = state.filter((todo) => todo.id !== id);
      }
      localStorage.setItem("todos", JSON.stringify(state));
      return state;
    },
    todoSearch(state, action) {
      const keyword = action.payload;
      console.log(keyword);
      if (keyword) {
        state = state.filter(
          (todo) =>
            todo.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
        return state;
      }
      if(keyword === ""){ return; }
         },
  },
});

export const { todoAdded, todoUpdated, todoDeleted,todoSearch } = todosSlice.actions;

export default todosSlice.reducer;
