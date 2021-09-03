import Header from "./Header";
import avatar from "../../assets/avatar.png";

export default {
  title: "Parts/Header",
  argTypes: {
    avatar: {
      control: {
        type: "file",
      },
    },
    status: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    status: { status: "Connected", used: "50%", quota: "50 + 0 / 100" },
    avatar,
  },
  component: Header,
};

export const Default = (props) => <Header {...props} />;
