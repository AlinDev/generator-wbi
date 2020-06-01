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
    const NAME = this.props.name.toUpperCase()

    this.fs.copyTpl(
      this.templatePath('_actions/reduxName.actions.js'),
      this.destinationPath(`${path}_actions/${this.props.name}.actions.js`),
      {name:this.props.name,NAME:NAME},
    );
    this.fs.copyTpl(
      this.templatePath('_models/reduxName.model.js'),
      this.destinationPath(`${path}_models/${this.props.name}.model.js`),
      {name:this.props.name,NAME},
    );
    this.fs.copyTpl(
      this.templatePath('_reducers/reduxName.reducer.js'),
      this.destinationPath(`${path}_reducers/${this.props.name}.reducer.js`),
      {name:this.props.name,NAME},
    );
  }

};
