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
      >
        <div className={root("track")} />
        <div className={root("handle-track")}>
          <div className={root("handle")}>
            <div className={root("shadow")}>
              <div className="mdc-elevation-overlay" />
            </div>
            <div className={root("ripple")} />
            <div className={root("icons")}>
              <svg className={root("icon", { on: true })} viewBox="0 0 24 24">
                <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
              </svg>
              <svg className={root("icon", { off: true })} viewBox="0 0 24 24">
                <path d="M20 13H4v-2h16v2z" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      {caption && <label htmlFor={id}>{caption}</label>}
    </div>
  );
};

export default Switch;
