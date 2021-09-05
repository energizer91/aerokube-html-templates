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
  },
  component: Switch,
};

export const Default = (props) => <Switch {...props} />;
