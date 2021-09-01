import React from "react";
import cn from "../../helpers/classnames";

const Switch = ({
  id = "switch",
  checked = false,
  name = "switch",
  caption,
}) => {
  const root = cn("switch");

  return (
    <label
      className={root(null, ["mdl-js-switch", "mdl-js-ripple-effect"])}
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

export default Switch;
