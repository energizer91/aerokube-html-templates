import React from "react";
import cn from "../../helpers/classnames";
import { MDCCheckbox } from "@material/checkbox";
import { MDCFormField } from "@material/form-field";

const Checkbox = ({
  id = "check",
  checked = "false",
  name = "check",
  caption,
}) => {
  const root = cn("checkbox");
  const ref = React.useRef(null);
  const field = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !field.current) {
      return;
    }

    const formField = new MDCFormField(field.current);
    const input = new MDCCheckbox(ref.current);

    formField.input = input;
  });

  return (
    <>
      <div ref={field} className="mdc-form-field">
        <div ref={ref} className={root()}>
          <input
            type="checkbox"
            className={root("native-control")}
            id={id}
            name={name}
            defaultChecked={checked}
          />
          <div className={root("background")}>
            <svg className={root("checkmark")} viewBox="0 0 24 24">
              <path
                className={root("checkmark-path")}
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
            <div className={root("mixedmark")} />
          </div>
          <div className={root("ripple")} />
        </div>
        {caption && <label htmlFor={id}>{caption}</label>}
      </div>
    </>
  );
};

export default Checkbox;
