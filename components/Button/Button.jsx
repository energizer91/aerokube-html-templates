import React from "react";
import { MDCRipple } from "@material/ripple";
import cn from "../../helpers/classnames";

const Button = ({
  outlined = false,
  unelevated = false,
  disabled = false,
  icon,
  children,
  onClick,
  className = "",
  ...rest
}) => {
  const root = cn("button");
  const ref = React.useRef(null);
  const iconOnly = Boolean(!children && icon);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    new MDCRipple(ref.current);
  });

  return (
    <button
      type="button"
      disabled={disabled}
      ref={ref}
      className={root(
        { outlined, icon, unelevated, "icon-only": iconOnly },
        className.split(" ")
      )}
      onClick={onClick}
      {...rest}
    >
      <span className={root("ripple")} />
      {!!icon && <i className={root("icon", ["material-icons"])}>{icon}</i>}
      {children}
    </button>
  );
};

export default Button;
