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
        default: 'Landing'
      },
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  }

  writing() {
    this.log(this.options.path)
    const path = this.options.path!==undefined?this.options.path:'';
    if( path!=='') mkdirp.sync(`${this.options.path}/`)

      // this.fs.copyTpl(
      //   this.templatePath(),
      //   this.destinationPath(`${path}/${this.props.page}`),
      //   {props:this.props},
      // )

      }

};
