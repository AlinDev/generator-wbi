'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("path", { type: String, required: false});
  }

  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your the name of your page?',
        default: 'page'
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    const path=this.options.path?`${this.options.path}/`
      :'';
    const NAME = this.props.name.toUpperCase()
    const name = this.props.name.charAt(0).toLowerCase()+this.props.name.slice(1)
    const Name = this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)

    this.fs.copyTpl(
      this.templatePath('page/Name.jsx'),
      this.destinationPath(`${path}${name}/${Name}.jsx`),
      {name ,Name},
    );
    this.fs.copyTpl(
      this.templatePath('page/name.style.js'),
      this.destinationPath(`${path}${name}/${name}.style.js`),

    );
  }

};
