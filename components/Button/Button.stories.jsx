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
    raised: {
      controls: {
        type: "boolean",
      },
    },
    outline: {
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
  },
  args: {
    colored: true,
    raised: true,
    outline: false,
    icon: false,
    children: "Button",
  },
  component: Button,
};

export const Default = (props) => <Button {...props} />;

export const TextOnly = Default.bind({});
TextOnly.args = {
  colored: true,
  raised: false,
};

export const Outline = Default.bind({});
Outline.args = {
  colored: true,
  raised: false,
  outline: true,
};

export const Icon = Default.bind({});
Icon.args = {
  colored: false,
  raised: false,
  outline: true,
  icon: true,
  children: "favorite",
};

export const IconWithText = Default.bind({});
IconWithText.args = {
  colored: true,
  raised: false,
  outline: true,
  children: (
    <>
      <i className="material-icons me-2">favorite</i>
      <span>Like</span>
    </>
  ),
};
