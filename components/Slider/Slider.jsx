import React from "react";
import cn from "../../helpers/classnames";
import { MDCSlider } from "@material/slider";

const Slider = ({
  min = 0,
  max = 100,
  value = 0,
  step = 1,
  name,
  onChange,
}) => {
  const root = cn("slider");
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    new MDCSlider(ref.current);
  });

  return (
    <div className={root()} ref={ref}>
      <input
        className={root("input")}
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        name={name}
        aria-label="Slider"
        onChange={onChange}
      />
      <div className={root("track")}>
        <div className={root("track", { inactive: true })} />
        <div className={root("track", { active: true })}>
          <div className={root("track", { active_fill: true })} />
        </div>
      </div>
      <div className={root("thumb")}>
        <div className={root("thumb-knob")} />
      </div>
    </div>
  );
};

export default Slider;
