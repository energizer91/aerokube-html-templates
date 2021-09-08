import Select from "./Select";

export default {
  title: "Components/Select",
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
    icon: {
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
    icon: "",
    error: "",
  },
  component: Select,
};

export const Default = (props) => <Select {...props} />;

export const Dark = Default.bind({});
Dark.args = {
  dark: true,
  id: "dark",
  icon: "search",
};
