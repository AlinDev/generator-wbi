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
        type: "input",
        name: "name",
        message: "What is your the name of your rxjs set?",
        default: this.options.name,
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
    const chapter = this.options.chapter ;
    let _name = this.props.name;
    _name= this.toCamelCase(_name.split(" "))
    const name = this.props.name.toLowerCase();
    const NAME = this.props.name.toUpperCase();
    const Name =
      this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);

    this.fs.copyTpl(
      this.templatePath("epics/nameGet.epic.js"),
      this.destinationPath(`${path}_redux/actions/epics/${_name}Get.epic.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/namePost.epic.js"),
      this.destinationPath(`${path}_redux/actions/epics/${_name}Post.epic.js`),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/queries/name_mutation.gql.js"),
      this.destinationPath(
        `${path}_redux/actions/epics/queries/${_name}_mutation.gql.js`
      ),
      { name, NAME, Name, _name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/queries/name_query.gql.js"),
      this.destinationPath(
        `${path}_redux/actions/epics/queries/${_name}_query.gql.js`
      ),
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
