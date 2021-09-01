import "../styles/material/material.min.css";
import "../styles/material/material-grid.min.css";
import "../styles/main.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/material/material.min";
import { upgradeDomDecorator } from "../helpers/upgradeDomDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [upgradeDomDecorator];
