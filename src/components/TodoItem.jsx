import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoDeleted } from "./todoSlice";
import EditTodo from "./EditTodo";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const toggleFormEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      <div className="list-description">
        <p className="container">
          {todo.title}
        </p>
        <div>
          <button className="button button1" onClick={() => setIsEdit(true)}>
            Detail
          </button>
          <button
            className="button button2"
            onClick={() => dispatch(todoDeleted(todo.id))}
          >
            Remove
          </button>
        </div>
      </div>
      <div>
        {isEdit && (
          <EditTodo
            id={todo.id}
            isEdit={isEdit}
            toggleFormEdit={toggleFormEdit}
            todo={todo}
          />
        )}
      </div>
    </div>
  );
};

export default TodoItem;
