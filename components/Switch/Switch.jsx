import React from "react";
import cn from "../../helpers/classnames";
import { MDCSwitch } from "@material/switch";
import { MDCFormField } from "@material/form-field";

const Switch = ({
  id = "switch",
  checked = false,
  name = "switch",
  outlined = false,
  caption,
  onClick,
  disabled = false,
}) => {
  const root = cn("switch");
  const fieldRoot = cn("form-field");
  const ref = React.useRef(null);
  const field = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const formField = new MDCFormField(field.current);
    const input = new MDCSwitch(ref.current);
    formField.input = input;
  });

  return (
    <div ref={field} className={fieldRoot({ outlined })}>
      <button
        ref={ref}
        id={id}
        className={root({ unselected: !checked, selected: checked })}
        type="button"
        role="switch"
        name={name}
        aria-checked={checked}
        onClick={onClick}
        disabled={disabled}
      >
        <div className={root("track")} />
        <div className={root("handle-track")}>
          <div className={root("handle")}>
            <div className={root("shadow")}>
              <div className="mdc-elevation-overlay" />
            </div>
            <div className={root("ripple")} />
          </div>
        </div>
      </button>
      {caption && <label htmlFor={id}>{caption}</label>}
    </div>
  );
};

export default Switch;
