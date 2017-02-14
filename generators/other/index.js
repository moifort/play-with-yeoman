var Generator = require('yeoman-generator');

module.exports = class extends Generator {


    /*
     initializing - Your initialization methods (checking current project state, getting configs, etc)
     prompting - Where you prompt users for options (where you'd call this.prompt())
     configuring - Saving configurations and configure the project (creating .editorconfig files and other metadata files)
     default - If the method name doesn't match a priority, it will be pushed to this group.
     writing - Where you write the generator specific files (routes, controllers, etc)
     conflicts - Where conflicts are handled (used internally)
     install - Where installation are run (npm, bower)
     end - Called last, cleanup, say good bye, etc
     */

    prompting() {
        return this.prompt(
            [{
                type: 'confirm',
                name: 'cool',
                message: 'Do you like tomate?'
            }])
            .then((answers) => {
                this.log('cool feature', answers.cool);
                this.answers = answers
            });
    }

    writing() {
        //blabla
    }

    install() {
        //bla
    }
};