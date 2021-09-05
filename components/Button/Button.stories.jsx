import Button from "./Button";
import React from "react";

export default {
  title: "Components/Button",
  argTypes: {
    colored: {
      controls: {
        type: "boolean",
      },
    },
    unelevated: {
      controls: {
        type: "boolean",
      },
    },
    outlined: {
      controls: {
        type: "boolean",
      },
    },
    icon: {
      controls: {
        type: "text",
      },
    },
    children: {
      controls: {
        type: "text",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
  args: {
    colored: true,
    unelevated: true,
    outlined: false,
    icon: "",
    children: "Button",
  },
  component: Button,
};

export const Default = (props) => <Button {...props} />;

export const TextOnly = Default.bind({});
TextOnly.args = {
  colored: false,
  unelevated: false,
};

export const Outline = Default.bind({});
Outline.args = {
  colored: true,
  unelevated: false,
  outlined: true,
};

export const Icon = Default.bind({});
Icon.args = {
  colored: false,
  unelevated: false,
  outlined: true,
  icon: "favorite",
  children: "Like",
};
