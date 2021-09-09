import React from "react";
import Slider from "./Slider";

export default {
  title: "Components/Slider",
  argTypes: {
    min: {
      controls: {
        type: "number",
      },
    },
    max: {
      controls: {
        type: "number",
      },
    },
    value: {
      controls: {
        type: "number",
      },
    },
    onChange: {
      action: "changed",
    },
  },
  args: {
    min: 1,
    max: 4,
    value: 2,
  },
  component: Slider,
};

export const Default = (props) => <Slider {...props} />;
