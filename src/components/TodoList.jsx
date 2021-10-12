import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { todoSearch } from "./todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);
  const [wordsearch, setWordSearch] = useState("");
  const handleSearch = (e) => setWordSearch(e.target.value);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      wordsearch && dispatch(todoSearch(wordsearch));
      wordsearch === "" && window.location.reload();
    }
  };
  return (
    <div className="column">
      <AddTodo />
      <div className="todo-list">
        <p className="title">Todo List</p>
        <input
          type="text"
          placeholder="Search..."
          className="form-search"
          onChange={handleSearch}
          value={wordsearch}
          onKeyDown={handleKeyDown}
        />
        {todos && todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
      </div>
    </div>
  );
};

export default Todo;
