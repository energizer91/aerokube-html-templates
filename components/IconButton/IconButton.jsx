import React from "react";

const IconButton = ({ children, onClick }) => (
  <span
    role="button"
    className="icon-button material-icons-outlined"
    onClick={onClick}
  >
    {children}
  </span>
);

export default IconButton;
