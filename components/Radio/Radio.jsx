import React from "react";
import cn from "../../helpers/classnames";
import { MDCFormField } from "@material/form-field";
import { MDCRadio } from "@material/radio";

const Radio = ({
  id = "radio",
  checked = "false",
  caption,
  name = "radio",
}) => {
  const root = cn("radio");
  const ref = React.useRef(null);
  const field = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !field.current) {
      return;
    }

    const formField = new MDCFormField(field.current);
    const input = new MDCRadio(ref.current);

    formField.input = input;
  });

  return (
    <div className="mdc-form-field">
      <div className={root()}>
        <input
          className={root("native-control")}
          type="radio"
          id={id}
          name={name}
          defaultChecked={checked}
        />
        <div className={root("background")}>
          <div className={root("outer-circle")} />
          <div className={root("inner-circle")} />
        </div>
        <div className={root("ripple")} />
      </div>
      {caption && <label htmlFor={id}>{caption}</label>}
    </div>
  );
};

export default Radio;
