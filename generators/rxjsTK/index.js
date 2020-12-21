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
        default: this.options.redux,
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

    let naMe = this.nameToCamelCase3();
    let NA_ME = this.props.name.trim().replace(" ", "_").toUpperCase();
    const Name = naMe.charAt(0).toUpperCase() + naMe.slice(1);
    const name = naMe.charAt(0).toLowerCase() + naMe.slice(1);

    const na_me = NA_ME.toLowerCase();

    this.fs.copyTpl(
      this.templatePath("epics/nameGet.epic.js"),
      this.destinationPath(`${path}redux/${name}.redux/${name}Get.epic.js`),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/namePost.epic.js"),
      this.destinationPath(`${path}redux/${name}.redux/${name}Post.epic.js`),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/queries/name_mutation.gql.js"),
      this.destinationPath(
        `${path}redux/${name}.redux/${na_me}_mutation.gql.js`
      ),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("epics/queries/name_query.gql.js"),
      this.destinationPath(`${path}redux/${name}.redux/${na_me}_query.gql.js`),
      { na_me, NA_ME, Name, name }
    );
    this.fs.copyTpl(
      this.templatePath("useName.js"),
      this.destinationPath(`${path}redux/use${Name}.js`),
      { na_me, NA_ME, Name, name }
    );
  }

  // convert the input array to camel case
  nameToCamelCase3() {
    let inputArray = this.props.name.split(" ");
    let result = "";
    for (let i = 0, len = inputArray.length; i < len; i++) {
      let currentStr = inputArray[i];
      let tempStr = currentStr.toLowerCase();
      if (i != 0) {
        // convert first letter to upper case (the word is in lowercase)
        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
      }
      result += tempStr;
    }
    return result;
  }
};
