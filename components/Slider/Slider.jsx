import React from "react";
import cn from "../../helpers/classnames";
import { MDCSlider } from "@material/slider";

const getRulers = (min, max, step) => {
  const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }

  return result;
};

const Slider = ({
  min = 0,
  max = 100,
  value = 0,
  step = 1,
  name,
  id = "slider",
  label = "Label",
}) => {
  const root = cn("slider");
  const ref = React.useRef(null);
  const [selected, setSelected] = React.useState(value);
  const rulers = getRulers(min, max, step);

  const onSliderChange = (e) => {
    setSelected(e.detail.value);
  };
  React.useEffect(() => {
    if (!ref.current) {
      return;
    }

    const slider = new MDCSlider(ref.current);
    slider.root.addEventListener("MDCSlider:change", onSliderChange);
  }, [ref]);

  return (
    <div className={root("wrapper")}>
      {label && (
        <label htmlFor={id} className={root("label")}>
          {label}
        </label>
      )}
      <div className={root()} ref={ref}>
        <input
          id={id}
          className={root("input")}
          type="range"
          min={min}
          max={max}
          defaultValue={value}
          step={step}
          name={name}
          aria-label="Slider"
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
      {rulers && rulers.length && (
        <div className={root("rulers")}>
          {rulers.map((r) => (
            <span
              key={r}
              className={root("ruler", { selected: r === selected })}
            >
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;
