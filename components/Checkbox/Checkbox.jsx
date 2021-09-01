import React from "react";
import cn from "../../helpers/classnames";

const Checkbox = ({
  id = "check",
  checked = "false",
  name = "check",
  caption,
}) => {
  const root = cn("checkbox");

  return (
    <label
      className={root(null, ["mdl-js-checkbox", "mdl-js-ripple-effect"])}
      htmlFor={id}
    >
      <input
        type="checkbox"
        name={name}
        id={id}
        className={root("input")}
        defaultChecked={checked}
      />
      <span className={root("label")}>{caption}</span>
    </label>
  );
};

export default Checkbox;
