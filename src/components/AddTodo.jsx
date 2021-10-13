import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { todoAdded } from "./todoSlice";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [pioriry, setPiority] = useState("normal");
  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handlePiority = (e) => setPiority(e.target.value);
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
    setPiority("normal");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todoAdded({
        id: uuidv4(),
        title,
        description,
        date,
        pioriry,
      })
    );
    clearForm();
  };
  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const yyyy = today.getFullYear();
    return yyyy + "-" + mm + "-" + dd;
};
  return (
    <div className="new-task">
      <p className="title">New Task</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task..."
          className="input-task"
          required
          value={title}
          onChange={handleTitle}
        />
        <div className="description">
          <p>Description</p>
          <textarea
            className="description-text"
            value={description}
            onChange={handleDescription}
          ></textarea>
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
              className="pick-date"
              value={date}
              onChange={handleDate}
              min={disablePastDate()}
            />
          </div>
          <div className="piority">
            <label htmlFor="piority">Piority</label>
            <select
              name="piority"
              id="piority"
              value={pioriry}
              onChange={handlePiority}
              className="select-piority"
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
