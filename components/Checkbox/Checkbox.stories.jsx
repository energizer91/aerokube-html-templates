import Checkbox from "./Checkbox";
import React from "react";

export default {
  title: "Components/Checkbox",
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
    onChange: {
      action: "changed",
    },
  },
  args: {
    id: "checkbox",
    name: "check",
    checked: true,
    caption: "Check",
  },
  component: Checkbox,
};

export const Default = (props) => <Checkbox {...props} />;
