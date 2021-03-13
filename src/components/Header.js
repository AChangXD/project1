import React from "react";
import PropTypes from "prop-types";
import { FaLightbulb, FaListUl } from "react-icons/fa";
const Header = ({ title, showAddTask, setShowAddTask }) => {
  //   console.log(title);

  return (
    <header className="header">
      <FaListUl></FaListUl>
      <h3 style={{ float: "center" }}>{title}</h3>

      <FaLightbulb
        onClick={setShowAddTask}
        style={
          showAddTask
            ? { color: "red", cursor: "pointer", float: "right" }
            : { color: "green", cursor: "pointer", float: "right" }
        }
      ></FaLightbulb>
    </header>
  );
};

Header.defaultProps = {
  title: "Default prop",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
