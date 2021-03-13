import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    // debugger;
    // console.log(props);
    e.preventDefault();

    if (!message) {
      alert("add task");
      return;
    }

    addTask({ title, message, reminder });

    setTitle("");
    setMessage("");
    setReminder(false);
  };

  return (
    <React.Fragment>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            type="text"
            placeholder="Add Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div
          className="form-control"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <label>Message</label>
          <input
            type="text"
            placeholder="Add Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div
          className="form-control"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <label>SetReminder</label>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onClick={(e) => setReminder(e.currentTarget.checked)}
            style={{ width: "1.25rem", height: "1.25rem" }}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </React.Fragment>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func,
};

export default AddTask;
