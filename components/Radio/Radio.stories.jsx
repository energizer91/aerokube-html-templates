import Radio from "./Radio";
import React from "react";

export default {
  title: "Components/Radio",
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
    value: {
      controls: {
        type: "text",
      },
    },
    onChange: {
      action: "changed",
    },
  },
  args: {
    id: "radio",
    checked: true,
    caption: "Check",
    name: "check",
    value: "check",
  },
  component: Radio,
};

export const Default = (props) => <Radio {...props} />;
