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
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the rad ${chalk.red("wbi")} generator!`));

    const prompts = [
      {
        type: "input",
        name: "chapter",
        message: "What is your the name of your chapter?",
        default: "chapter",
      }
    ];
    return this.prompt(prompts).then(
      function (props) {
        this.props = props;
      }.bind(this)
    );
  }

  writing() {
    const path = this.options.path  ? `${this.options.path}/` : "";
    const _name = this.props.chapter;
    const naMe= this.toCamelCaseString(_name.split(" "))
    console.log("{index.js}[writing](37) naMe", naMe)
    const NAME = _name.toUpperCase();
    const name = _name.toLowerCase();
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    this.composeWith(require.resolve("../page"), {
      path: `${path}${_name}` + "/pages",
      chapter: _name
    });

    mkdirp.sync(`${path}`);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${path}${_name}`),
      { name, Name, NAME, _name }
    );
  }





// convert the input array to camel case
  toCamelCase(inputArray) {

    let result = ""

    for (let i = 0, len = inputArray.length; i < len; i++) {

      let currentStr = inputArray[i]

      let tempStr = currentStr.toLowerCase()

      if (i != 0) {

        // convert first letter to upper case (the word is in lowercase)
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)

      }

      result += tempStr

    }

    return result
  }


// this function call all other functions

  toCamelCaseString(input) {

    let words = input

    return this.toCamelCase(words)

  }

};
