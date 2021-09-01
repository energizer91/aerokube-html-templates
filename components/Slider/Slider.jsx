import React from "react";
import cn from "../../helpers/classnames";

const Slider = ({ min = 0, max = 100, value = 0, step = 1 }) => {
  const root = cn("slider");

  return (
    <input
      type="range"
      className={root(null, ["mdl-js-slider"])}
      min={min}
      max={max}
      defaultValue={value}
      step={step}
    />
  );
};

export default Slider;
