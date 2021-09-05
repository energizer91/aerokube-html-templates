import React from "react";
import cn from "../../helpers/classnames";
import { MDCTextField } from "@material/textfield";

const TextField = ({
  id = "textfield",
  label,
  dark = false,
  value,
  placeholder,
  error,
  icon,
  onChange,
}) => {
  const root = cn("text-field");
  const outline = cn("notched-outline");
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      new MDCTextField(ref.current);
    }
  }, [ref]);

  return (
    <>
      {label && (
        <div className={root("label")}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div
        ref={ref}
        className={root({ dark, outlined: true, "no-label": true })}
      >
        <span className={outline()}>
          <span className={outline("leading")} />
          <span className={outline("trailing")} />
        </span>
        {icon && (
          <i
            className={root("icon", { leading: true }, ["material-icons"])}
            tabIndex="0"
            role="button"
          >
            {icon}
          </i>
        )}
        <input
          className={root("input")}
          type="text"
          id={id}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <div className="mdc-text-field-helper-line">
          <div
            className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
            aria-hidden="true"
          >
            {error}
          </div>
        </div>
      )}
    </>
  );
};

export default TextField;
