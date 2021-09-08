import "regenerator-runtime/runtime";
import React from "react";
import path from "path";
import fs from "fs";
import util from "util";
import globCb from "glob";
import ReactDOMServer from "react-dom/server";

const writeFile = util.promisify(fs.writeFile);
const glob = util.promisify(globCb);

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

async function main() {
  const stories = await glob("./*(components|parts|views)/**/*.stories.jsx");

  return Promise.all(
    stories.map((story) => {
      console.log("Rendering", story);
      const component = require(path.resolve(__dirname, story));
      const { default: options, ...variants } = component;

      return Promise.all(
        Object.keys(variants).map((variant) => {
          const Component = variants[variant];
          const markup = ReactDOMServer.renderToString(
            <Component {...Object.assign({}, options.args, Component.args)} />
          );
          const storyPath = path.parse(story);

          return writeFile(
            path.resolve(
              __dirname,
              "dist",
              storyPath.name.split(".")[0].toLowerCase() +
                "-" +
                variant.toLowerCase() +
                ".html"
            ),
            markup
          );
        })
      );
    })
  );
}

main().catch(console.error);
