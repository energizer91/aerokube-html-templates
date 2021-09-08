import React from "react";
import Snackbar from "./Snackbar";

export default {
  title: "Components/Snackbar",
  argTypes: {
    children: {
      controls: {
        type: "text",
      },
    },
  },
  args: {
    children: "Virtual machine launched.",
  },
  component: Snackbar,
};

export const Default = (props) => <Snackbar {...props} />;
