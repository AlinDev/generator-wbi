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
        message: "What is your the name of your rxjs set?",
        default: "rxjs",
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
    const name = this.props.name.toLowerCase();
    const NAME = this.props.name.toUpperCase();
    const Name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);

    this.fs.copyTpl(
      this.templatePath("_epics/nameGet.epic.js"),
      this.destinationPath(`${path}_epics/${_name}Get.epic.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("_epics/namePost.epic.js"),
      this.destinationPath(`${path}_epics/${_name}Post.epic.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("_queries/name_mutation.gql.js"),
      this.destinationPath(`${path}_queries/${_name}_mutation.gql.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("_queries/name_query.gql.js"),
      this.destinationPath(`${path}_queries/${_name}_query.gql.js`),
      { name, NAME, Name, _name }
    );
  }
};
