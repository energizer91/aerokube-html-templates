import React from "react";
import cn from "../../helpers/classnames";

const Radio = ({
  id = "radio",
  checked = "false",
  caption,
  name = "radio",
  value,
}) => {
  const root = cn("radio");

  return (
    <label
      className={root(null, ["mdl-js-radio", "mdl-js-ripple-effect"])}
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        className={root("button")}
        name={name}
        defaultValue={value}
        defaultChecked={checked}
      />
      <span className={root("label")}>{caption}</span>
    </label>
  );
};

export default Radio;
