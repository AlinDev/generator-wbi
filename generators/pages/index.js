'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    const prompts = [
      {
        type: 'input',
        name: 'page',
        message: 'What is your the name of your page?',
        default: 'PG'
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    mkdirp.sync(`${this.options.path}/`);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${this.options.path}/${this.props.page[i]}`),
      {props:this.props},
    );
  }

};
