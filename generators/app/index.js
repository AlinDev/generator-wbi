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
        name: "name",
        message: "What is your the name of your chapter?",
        default: "chapter",
      },
      {
        type: "confirm",
        name: "redux",
        message: "Install redux?",
        default: true,
      }, {
        type: "confirm",
        name: "rxjs",
        message: "Install rxjs?",
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
    const _name = this.props.name;
    const NAME = this.props.name.toUpperCase();
    const name = this.props.name.toLowerCase();
    const Name = name.charAt(0).toUpperCase() + name.slice(1);

    this.composeWith(require.resolve("../page"), {
      path: path + "/pages",
      chapter: _name
    });
    if (this.props.redux)
      this.composeWith(require.resolve("../redux"), {
        path:  path,
        rxjs:   this.options.rxjs,
        chapter: _name
      });
    mkdirp.sync(`${this.options.path}/`);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${path}${_name}`),
      { name, Name, NAME, _name }
    );
  }
};
