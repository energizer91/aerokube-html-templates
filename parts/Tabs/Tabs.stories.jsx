import Tabs from "./Tabs";

export default {
  title: "Parts/Tabs",
  argTypes: {
    tabs: {
      control: {
        type: "array"
      }
    },
    active: {
      control: {
        type: "number"
      }
    },
    onChange: {
      action: "changed"
    }
  },
  args: {
    tabs: [
      { id: "tab-1", name: "Tab 1" },
      { id: "tab-2", name: "Tab 2" }
    ],
    active: 0
  },
  component: Tabs
};

export const Default = (props) => <Tabs {...props} />;
