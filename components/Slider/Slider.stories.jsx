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
  },
  args: {
    min: 0,
    max: 100,
    value: 42,
  },
  component: Slider,
};

export const Default = (props) => <Slider {...props} />;
