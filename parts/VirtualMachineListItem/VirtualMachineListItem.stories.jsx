import React from "react";
import VirtualMachineListItem from "./VirtualMachineListItem";

export default {
  title: "Parts/VirtualMachineListItem",
  argTypes: {
    children: {
      controls: {
        type: "text",
      },
    },
  },
  args: {
    virtualMachine: {
      name: "Working VM",
      ipAddress: "387.987.150.150",
      config: ["2 VCPU", "4GB RAM"],
      labels: [
        {
          caption: "Tag name",
          color: "warning",
        },
        {
          caption: "Another Tag Name",
          color: "success",
        },
      ],
    },
  },
  component: VirtualMachineListItem,
};

export const Default = (props) => <VirtualMachineListItem {...props} />;
