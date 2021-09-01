import { useEffect } from "react";

export const upgradeDomDecorator = (Story) => {
  useEffect(() => {
    componentHandler.upgradeDom();
  });

  return <Story />;
};
