"use strict";
const Generator = require("yeoman-generator");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("path", { type: String, required: false });
  }

  prompting() {
    const prompts = [
      {
        type: "confirm",
        name: "rxjs",
        message: "Install rxjs",
        default: true,
      },
      {
        type: "input",
        name: "name",
        message: "What is your the name of your redux[rxjs] pair?",
        default: this.options.page,
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
    const page = this.options.page;
    let naMe = this.nameToCamelCase2();

    const NA_ME = this.props.name.trim().replace(" ", "_").toUpperCase();
    const Name = naMe.charAt(0).toUpperCase() + naMe.slice(1);
    const name = naMe.charAt(0).toLowerCase() + naMe.slice(1);
    const na_me = NA_ME.toLowerCase();

    if (this.props.rxjs)
      this.composeWith(require.resolve("../rxjsTK"), {
        path: this.options.path,
        redux: this.props.name,
        chapter: this.props.name,
      });

    this.fs.copyTpl(
      this.templatePath("redux/reduxName.model.js"),
      this.destinationPath(`${path}_redux/${name}.redux/${naMe}.model.js`),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("redux/name.slice.js"),
      this.destinationPath(`${path}_redux/${name}.redux/${naMe}.slice.js`),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("errors/errorName.error.js"),
      this.destinationPath(`${path}_redux/${name}.redux/${naMe}.errors.js`),
      { na_me, NA_ME, Name, name }
    );
  }

  nameToUpperCaseUnderscore() {
    return this.props.name.replace(" ", "_").toUpperCase();
  }
  // convert the input array to camel case
  nameToCamelCase2() {
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
