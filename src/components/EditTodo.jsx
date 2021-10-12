import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoUpdated } from "./todoSlice";

const EditTodo = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(props.todo.title);
  const [description, setDescription] = useState(props.todo.description);
  const [date, setDate] = useState(props.todo.date);
  const [pioriry, setPiority] = useState(props.todo.pioriry);
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handlePiority = (e) => setPiority(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todoUpdated({
        id: props.id,
        title,
        description,
        date,
        pioriry,
      })
    );
    props.toggleFormEdit();
  };
  return (
    <div className="edit-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitle}
          className="title-todo"
        />
        <div style={{ margin: "20px 0" }}>
          <p>Description</p>
          <textarea
            className="description-todo"
            value={description}
            onChange={handleDescription}
          >
            Lorem Ipsum...
          </textarea>
        </div>
        <div className="date">
          <div className="due-date">
            <label htmlFor="due-date">Due Date</label>
            <input
              required
              data-date-format="DD MMMM YYYY"
              type="date"
              name="due-date"
              id="due-date"
              className="pick-date-todo"
              value={date}
              onChange={handleDate}
            />
          </div>
          <div className="piority">
            <label htmlFor="piority">Piority</label>
            <select
              name="piority"
              id="piority"
              className="select-piority-todo"
              value={pioriry}
              onChange={handlePiority}
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button className="btn" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTodo;
