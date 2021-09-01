import Textfield from "./TextField";

export default {
  title: "Components/TextField",
  argTypes: {
    label: {
      controls: {
        type: "text",
      },
    },
    dark: {
      controls: {
        type: "boolean",
      },
    },
    value: {
      controls: {
        type: "text",
      },
    },
    placeholder: {
      controls: {
        type: "text",
      },
    },
    id: {
      controls: {
        type: "text",
      },
    },
    error: {
      controls: {
        type: "text",
      },
    },
  },
  args: {
    label: "Label",
    dark: false,
    value: "Text",
    placeholder: "placeholder",
    id: "sample",
    error: "",
  },
  component: Textfield,
};

export const Default = (props) => <Textfield {...props} />;

export const Dark = Default.bind({});
Dark.args = {
  dark: true,
};
