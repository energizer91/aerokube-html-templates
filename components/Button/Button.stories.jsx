import Button from "./Button";
import React from "react";

export default {
  title: "Components/Button",
  argTypes: {
    disabled: {
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
    disabled: false,
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
  unelevated: false,
};

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
};

export const Outline = Default.bind({});
Outline.args = {
  unelevated: false,
  outlined: true,
};

export const Icon = Default.bind({});
Icon.args = {
  unelevated: false,
  outlined: true,
  icon: "favorite",
  children: "Like",
};

export const IconOnly = Default.bind({});
IconOnly.args = {
  unelevated: false,
  outlined: true,
  icon: "favorite",
  children: null,
};
