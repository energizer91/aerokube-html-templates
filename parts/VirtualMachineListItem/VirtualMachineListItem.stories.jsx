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
    children: "Label",
  },
  component: VirtualMachineListItem,
};

export const Default = (props) => <VirtualMachineListItem {...props} />;
