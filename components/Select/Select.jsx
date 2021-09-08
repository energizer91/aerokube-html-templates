import React from "react";
import { MDCSelect } from "@material/select";
import cn from "../../helpers/classnames";

const TextField = ({
  id = "select",
  label,
  options = [],
  selected = 0,
  onChange,
  className = "",
}) => {
  const root = cn("select");
  const outline = cn("notched-outline");
  const list = cn("list");
  const listItem = cn("list-item");
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      const select = new MDCSelect(ref.current);

      select.listen("MDCSelect:change", onChange);
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
        id={id}
        ref={ref}
        className={root(
          { outlined: true, "no-label": true },
          className.split(" ")
        )}
      >
        <div className={root("anchor")} aria-labelledby="outlined-select-label">
          <span className={outline()}>
            <span className={outline("leading")} />
            <span className={outline("trailing")} />
          </span>
          <span className={root("selected-text-container")}>
            <span id="demo-selected-text" className={root("selected-text")} />
          </span>
          <span className={root("dropdown-icon")}>
            <svg
              className={root("dropdown-icon-graphic")}
              viewBox="7 10 10 5"
              focusable="false"
            >
              <polygon
                className={root("dropdown-icon-inactive")}
                stroke="none"
                fillRule="evenodd"
                points="7 10 12 15 17 10"
              />
              <polygon
                className={root("dropdown-icon-active")}
                stroke="none"
                fillRule="evenodd"
                points="7 15 12 10 17 15"
              />
            </svg>
          </span>
        </div>

        <div
          className={root("menu", [
            "mdc-menu",
            "mdc-menu-surface",
            "mdc-menu-surface--fullwidth",
          ])}
        >
          <ul className={list()} role="listbox" aria-label={label}>
            {options.map((o, i) => (
              <li
                key={o.value}
                className={listItem({ selected: i === selected })}
                aria-selected={i === selected}
                data-value={o.value}
                role="option"
              >
                <span className={listItem("ripple")} />
                <span className={listItem("text")}>{o.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TextField;
