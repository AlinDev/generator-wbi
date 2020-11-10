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
    const NAME = _name.toUpperCase();
    const name = _name.toLowerCase();
    const Name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log("path",path)
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
};
