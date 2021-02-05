"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const mkdirp = require("mkdirp");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("path", { type: String, required: false });
  }

  prompting() {
    const prompts = [
      {
        type: "input",
        name: "name",
        message: "What is your the name of your page?",
        default: this.options.chapter,
      },
      {
        type: "confirm",
        name: "redux",
        message: "Install redux?",
        default: true,
      },
    ];
    return this.prompt(prompts).then(
      function (props) {
        this.props = props;
      }.bind(this)
    );
  }

  writing() {
    const path = this.options.path ? `${this.options.path}/` : "";
    const chapter = this.options.chapter ? `${this.options.chapter}/` : "";
    let _name = this.nameToCamelCase();

    const NAME = _name.toUpperCase();
    const name = _name.charAt(0).toLowerCase() + _name.slice(1);
    const Name = _name.charAt(0).toUpperCase() + _name.slice(1);

    this.fs.copyTpl(
      this.templatePath("page/Name.jsx"),
      this.destinationPath(`${path}${name}/${Name}.jsx`),
      { name, Name, _name, NAME }
    );
    this.fs.copyTpl(
      this.templatePath("page/name.style.js"),
      this.destinationPath(`${path}${name}/${name}.style.js`)
    );
    if (this.props.redux)
      this.composeWith(require.resolve("../reduxTK"), {
        path: path,
        chapter: chapter,
        page: this.props.name,
      });
  }

  // convert the input array to camel case
  nameToCamelCase() {
    let inputArray = this.props.name.split(" ");
    let result = "";
    for (let i = 0, len = inputArray.length; i < len; i++) {
      let currentStr = inputArray[i];
      let tempStr = currentStr.toLowerCase();
      if (i != 0) {
        // convert first letter to upper case (the word is in lowercase)
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
      }
      result += tempStr;
    }
    return result;
  }
};
