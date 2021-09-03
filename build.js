import React from "react";
import path from "path";
import fs from "fs";
import util from "util";
import ReactDOMServer from "react-dom/server";

const writeFile = util.promisify(fs.writeFile);

const components = [
  {
    name: "button",
    path: "components/Button/Button",
    variants: [
      {
        name: "regular",
        props: {
          children: "{{ .Caption }}",
        },
      },
    ],
  },
  {
    name: "textfield",
    path: "components/TextField/TextField",
    variants: [
      {
        name: "regular",
        props: {
          label: "{{ .Label }}",
        },
      },
      {
        name: "dark",
        props: {
          dark: true,
          label: "{{ .Label }}",
        },
      },
    ],
  },
  {
    name: "header",
    path: "parts/Header/Header",
    variants: [
      {
        name: "regular",
        props: {
          status: {},
        },
      },
    ],
  },
];

const removeDir = function (path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path);

    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(path + "/" + filename).isDirectory()) {
          removeDir(path + "/" + filename);
        } else {
          fs.unlinkSync(path + "/" + filename);
        }
      });
      fs.rmdirSync(path);
    } else {
      fs.rmdirSync(path);
    }
  } else {
    console.log("Directory path not found.");
  }
};

if (fs.existsSync(path.resolve(__dirname, "dist"))) {
  removeDir(path.resolve(__dirname, "dist"));
}

fs.mkdirSync(path.resolve(__dirname, "dist"));

Promise.all(
  components.map((component) => {
    const Component = require(path.resolve(__dirname, component.path + ".jsx"));

    return Promise.all(
      component.variants.map((variant) => {
        const markup = ReactDOMServer.renderToString(
          <Component.default {...variant.props} />
        );

        return writeFile(
          path.resolve(
            __dirname,
            "dist",
            component.name + "-" + variant.name + ".html"
          ),
          markup
        );
      })
    );
  })
).catch(console.error);
