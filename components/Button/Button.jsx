import React from "react";
import cn from "../../helpers/classnames";

const Button = ({
  colored = false,
  raised = false,
  outline = false,
  icon,
  children,
}) => {
  const root = cn("button");

  return (
    <button
      className={root({ colored, raised, outline, icon }, [
        "mdl-js-button",
        "mdl-js-ripple-effect",
      ])}
    >
      {icon ? <i className="material-icons">{children}</i> : children}
    </button>
  );
};

export default Button;
