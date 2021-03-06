import React from "react";
import PropTypes from "prop-types";

function Button({ style, text, onClick }) {
  return (
    <React.Fragment>
      <button style={style} onClick={onClick} className="btn">
        {text}
      </button>
    </React.Fragment>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: "[Add button text]",
  color: "black",
};
export default Button;
