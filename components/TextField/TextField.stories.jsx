import React from "react";
import TextField from "./TextField";

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
    onChange: {
      action: "changed",
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
  component: TextField,
};

export const Default = (props) => <TextField {...props} />;

export const Dark = Default.bind({});
Dark.args = {
  dark: true,
  id: "dark",
  icon: "search",
};
