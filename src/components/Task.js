import div from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

function Task({ id, title, message, reminder, onDelete, onToggle }) {
  return (
    <div
      className={reminder ? "task reminder" : "task"}
      onDoubleClick={onToggle}
    >
      {title} with ID of: {id}
      {/* <Button
          text="x"
          onClick={onDelete}
          style={{ backgroundColor: "red", float: "right" }}
        ></Button> */}
      <FaTrashAlt
        style={{ color: "red", cursor: "pointer", float: "right" }}
        onClick={onDelete}
      ></FaTrashAlt>
      <article>{message} </article>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  message: PropTypes.string,
};

export default Task;
