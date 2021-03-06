import React from "react";
import PropTypes from "prop-types";
import { FaLightbulb, FaListUl } from "react-icons/fa";
const Header = ({ title }) => {
  //   console.log(title);

  const onClick = (e) => {
    console.log(e);
  };

  return (
    <header className="header">
      <FaListUl></FaListUl>
      <h3 style={{ float: "center" }}>{title}</h3>

      <FaLightbulb
        text="Add"
        onClick={onClick}
        style={{ color: "green", cursor: "pointer", float: "right" }}
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
