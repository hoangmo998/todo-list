import { configureStore } from '@reduxjs/toolkit';
import todosReducers from './components/todoSlice';

export default configureStore({
  reducer: {
    todos: todosReducers,
  },
});
