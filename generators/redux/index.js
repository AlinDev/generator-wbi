"use strict";
const Generator = require("yeoman-generator");
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("path", { type: String, required: false });
  }

  prompting() {
    const prompts = [
      {
        type: "confirm",
        name: "rxjs",
        message: "Install rxjs",
        default: true,
      },
      {
        type: "input",
        name: "name",
        message: "What is your the name of your redux[rxjs] pair?",
        default:  this.options.page ,
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
    const chapter = this.options.chapter ? `${this.options.chapter}/` : "";
    const page = this.options.page
    let _name = this.props.name;
    _name= this.toCamelCase(_name.split(" "))
    const name = this.props.name.toLowerCase();
    const NAME = this.props.name.toUpperCase();
    const Name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);

    if (this.props.rxjs)
      this.composeWith(require.resolve("../rxjs"), {
        path: this.options.path,
        name: _name,
        chapter: chapter });

    this.fs.copyTpl(
      this.templatePath("actions/reduxName.actions.js"),
      this.destinationPath(`${path}_redux/actions/${_name}.actions.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("actions/reducers/models/reduxName.model.js"),
      this.destinationPath(
        `${path}_redux/actions/reducers/models/${_name}.model.js`
      ),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("actions/reducers/reduxName.reducer.js"),
      this.destinationPath(
        `${path}_redux/actions/reducers/${_name}.reducer.js`
      ),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("errors/errorName.error.js"),
      this.destinationPath(`${path}_redux/errors/${_name}.errors.js`),
      { name, NAME, Name, _name }
    );
  }


// convert the input array to camel case
  toCamelCase(inputArray) {
    let result = ""
    for (let i = 0, len = inputArray.length; i < len; i++) {
      let currentStr = inputArray[i]
      let tempStr = currentStr.toLowerCase()
      if (i != 0) {
        // convert first letter to upper case (the word is in lowercase)
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
      }
      result += tempStr
    }
    return result
  }
};
