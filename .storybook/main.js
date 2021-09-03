const path = require("path");

module.exports = {
  stories: [
    "../components/**/*.stories.jsx",
    "../parts/**/*.stories.jsx",
    "../views/**/*.stories.jsx",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
