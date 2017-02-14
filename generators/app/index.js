var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.option('babel');
    }

    method1() {
        this.log('Do something duuude');
    }


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
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname // Default to current folder name
            }, {
                type: 'confirm',
                name: 'cool',
                message: 'Would you like to enable the Cool feature?'
            }])
            .then((answers) => {
                this.log('app name', answers.name);
                this.log('cool feature', answers.cool);
                this.answers = answers
            });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('pom.xml'),
            this.destinationPath('pom000.xml'),
            { name: this.answers.name }
        );

        this.fs.copyTpl(
            this.templatePath('src'),
            this.destinationPath('myjava'),
            { name: this.answers.name }
        );
    }

    install() {
        this.spawnCommand('mvn', ['install']);
    }

    end() {
        this.config.save()
    }
};