import React from "react";
import path from "path";
import fs from "fs";
import util from "util";
import ReactDOMServer from "react-dom/server";

const writeFile = util.promisify(fs.writeFile);

const components = [
  {
    name: "Button",
    path: "components/Button/Button",
    props: {
      children: "{{ .Caption }}",
    },
  },
  {
    name: "TextField",
    path: "components/TextField/TextField",
    props: {
      label: "{{ .Label }}",
    },
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

    const markup = ReactDOMServer.renderToString(
      <Component.default {...component.props} />
    );

    return writeFile(
      path.resolve(__dirname, "dist", component.name + ".html"),
      markup
    );
  })
).catch(console.error);
