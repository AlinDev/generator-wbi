'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("chapterName", { type: String, required: true });
  }
  prompting() {

    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the rad ${chalk.red('generator-wbi')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'chapter',
        message: 'What is your the name of your chapter?',
        default: 'chapter'
      },
      {
        type: 'confirm',
        name: 'redux',
        message: 'Install redux?',
        default: false
      },
      {
        type: 'confirm',
        name: 'rxjs',
        message: 'Install rxjs',
        default: false
      },
    ];
    return this.prompt(prompts).then(function (props) {
      this.props = props;

    }.bind(this));
  }

  writing() {
    // this.composeWith(require.resolve('../page'),{ path: this.options.chapterName+'/page'  });
    // if(this.props.redux)this.composeWith(require.resolve('../redux'),{ path: this.options.chapterName  } );
    // if(this.props.rxjs)this.composeWith(require.resolve('../rxjs'),{ path: this.options.chapterName  });

    mkdirp.sync(`${this.options.chapterName}/`);
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(`${this.options.chapterName}/`),
      {props:this.props},
    );
  }
};
