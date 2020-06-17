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
        message: 'What is your the name of your redux pair?',
        default: 'redux'
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    const path=this.options.path?`${this.options.path}/`
      :'';
    const _name = this.props.name
    const name = this.props.name.toLowerCase()
    const NAME = this.props.name.toUpperCase()
    const Name = this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)

    this.fs.copyTpl(
      this.templatePath('_actions/reduxName.actions.js'),
      this.destinationPath(`${path}_actions/${_name}.actions.js`),
      {name,NAME,Name,_name},
    );
    this.fs.copyTpl(
      this.templatePath('_models/reduxName.model.js'),
      this.destinationPath(`${path}_models/${_name}.model.js`),
      {name,NAME,Name,_name},
    );
    this.fs.copyTpl(
      this.templatePath('_reducers/reduxName.reducer.js'),
      this.destinationPath(`${path}_reducers/${_name}.reducer.js`),
      {name,NAME,Name,_name},
    );
  }

};
