import Switch from "./Switch";
import React from "react";

export default {
  title: "Components/Switch",
  argTypes: {
    id: {
      controls: {
        type: "text",
      },
    },
    checked: {
      controls: {
        type: "boolean",
      },
    },
    outlined: {
      controls: {
        type: "boolean",
      },
    },
    disabled: {
      controls: {
        type: "boolean",
      },
    },
    caption: {
      controls: {
        type: "text",
      },
    },
    name: {
      controls: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    id: "checkbox",
    name: "check",
    checked: true,
    caption: "Check",
    outlined: false,
    disabled: false,
  },
  component: Switch,
};

export const Default = (props) => <Switch {...props} />;

export const Outlined = Default.bind({});
Outlined.args = {
  outlined: true,
};
export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};
