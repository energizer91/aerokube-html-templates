import React from "react";
import cn from "../../helpers/classnames";
import { MDCChipSet } from "@material/chips";

const ChipSet = ({ chips }) => {
  const root = cn("evolution-chip-set");
  const chip = cn("evolution-chip");
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    new MDCChipSet(ref.current);
  });

  return (
    <span ref={ref} className={root()} role="grid">
      <span className={root("chips")} role="presentation">
        {chips.map((c, index) => (
          <span
            key={c.id}
            className={chip({ color: c.color })}
            role="row"
            id={c.id}
          >
            <span className={chip("cell", { primary: true })} role="gridcell">
              <button
                className={chip("action", { primary: true })}
                type="button"
                tabIndex={index}
              >
                <span className={chip("text-label")}>{c.caption}</span>
              </button>
            </span>
          </span>
        ))}
      </span>
    </span>
  );
};

export default ChipSet;
