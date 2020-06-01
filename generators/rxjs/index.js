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
        message: 'What is your the name of your rxjs set?',
        default: 'rxjs'
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
    const Name = this.props.name.charAt(0).toUpperCase()+this.props.name.slice(1)


    this.fs.copyTpl(
      this.templatePath('_epics/nameGet.epic.js'),
      this.destinationPath(`${path}_epics/${this.props.name}Get.epic.js`),
      {name:this.props.name,NAME,Name},
    );this.fs.copyTpl(
      this.templatePath('_epics/namePost.epic.js'),
      this.destinationPath(`${path}_epics/${this.props.name}Post.epic.js`),
      {name:this.props.name,NAME,Name},
    );
    this.fs.copyTpl(
      this.templatePath('_queries/name_mutation.gql.js'),
      this.destinationPath(`${path}_queries/${this.props.name}_mutation.gql.js`),
      {name:this.props.name,NAME,Name},
    );
    this.fs.copyTpl(
      this.templatePath('_queries/name_query.gql.js'),
      this.destinationPath(`${path}_queries/${this.props.name}_query.gql.js`),
      {name:this.props.name,NAME,Name},
    );
  }

};
