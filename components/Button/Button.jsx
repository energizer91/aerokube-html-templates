import React from "react";
import { MDCRipple } from "@material/ripple";
import cn from "../../helpers/classnames";

const Button = ({
  colored = false,
  outlined = false,
  unelevated = false,
  icon,
  children,
  onClick,
}) => {
  const root = cn("button");
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    new MDCRipple(ref.current);
  });

  return (
    <button
      ref={ref}
      className={root({ colored, outlined, icon, unelevated })}
      onClick={onClick}
    >
      <span className={root("ripple")} />
      {!!icon && <i className={root("icon", ["material-icons"])}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
