import React from "react";
import Dialog from "./Dialog";

export default {
  title: "Components/Dialog",
  argTypes: {
    children: {
      controls: {
        type: "text",
      },
    },
    title: {
      controls: {
        type: "text",
      },
    },
    actionText: {
      controls: {
        type: "text",
      },
    },
    onAction: {
      action: "clicked",
    },
  },
  args: {
    children: "Virtual machine launched.",
    actionText: "Dismiss",
    title: "New Virtual Machine",
  },
  component: Dialog,
};

export const Default = (props) => <Dialog {...props} />;
