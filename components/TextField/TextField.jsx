import React from "react";
import cn from "../../helpers/classnames";
import { MDCFormField } from "@material/form-field";
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
  textarea = false,
  className = "",
  rootClassName = "",
}) => {
  const root = cn("text-field");
  const outline = cn("notched-outline");
  const ref = React.useRef(null);
  const field = React.useRef(null);

  React.useEffect(() => {
    if (ref.current && field.current) {
      const input = new MDCTextField(ref.current);
      const formField = new MDCFormField(field.current);

      formField.input = input;
    }
  }, [ref, field]);

  return (
    <div ref={field} className={rootClassName}>
      {label && (
        <div className={root("label")}>
          <label htmlFor={id}>{label}</label>
        </div>
      )}
      <div
        ref={ref}
        className={root(
          { dark, outlined: true, "no-label": true, textarea },
          className.split(" ")
        )}
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
        {textarea ? (
          <textarea
            className={root("input")}
            id={id}
            onChange={onChange}
            defaultValue={value}
            placeholder={placeholder}
          />
        ) : (
          <input
            className={root("input")}
            type="text"
            id={id}
            onChange={onChange}
            defaultValue={value}
            placeholder={placeholder}
          />
        )}
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
    </div>
  );
};

export default TextField;
