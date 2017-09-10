const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      `Welcome to the ${chalk.red('redux-container')} generator!`,
    ));

    // console.log('this.config: ', this.config);

    const LAYOUTS = ['default', 'withFilter', 'modal'];
    const FEATURES = ['validation', 'GriddleTable'];

    const prompts = [
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true,
      // },
      {
        type: 'input',
        name: 'containerName',
        message: 'What`s Container name:',
        default: 'ContainerName',
      },
      {
        type: 'input',
        name: 'mainReducer',
        message: 'What`s main reducer name:',
        default({ containerName }) {
          return _.camelCase(containerName);
        },
      },
      {
        type: 'input',
        name: 'dataReducer',
        message: 'What`s child reducer name for data:',
        default: 'data',
      },
      {
        type: 'list',
        name: 'layout',
        message: 'What`s layout:',
        choices: LAYOUTS,
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'What features do you want to include:',
        default: [],
        choices() {
          return FEATURES;
        },

      },
    ];

    return this.prompt(prompts).then((props) => {
      console.log('props: ', props);
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  // writing() {
  //   this.fs.copy(
  //     this.templatePath('dummyfile.txt'),
  //     this.destinationPath('dummyfile.txt')
  //   );
  // }
};
