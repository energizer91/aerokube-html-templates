import Select from "./Select";

export default {
  title: "Components/Select",
  argTypes: {
    label: {
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
    options: {
      controls: {
        type: "array",
      },
    },
    selected: {
      controls: {
        type: "number",
      },
    },
    onChange: {
      action: "changed",
    },
  },
  args: {
    label: "Label",
    id: "sample",
    selected: 0,
    options: [
      {
        value: "foo",
        title: "Foo",
      },
      {
        value: "bar",
        title: "Bar",
      },
      {
        value: "qux",
        title: "Qux",
      },
    ],
  },
  component: Select,
};

export const Default = (props) => <Select {...props} />;
