#!/usr/bin/env node

'use strict';
const chalk = require('chalk');
const Ora = require('ora');


const spinner = Ora('Welcome in Cli World').start();

setTimeout(() => {
	spinner.indent = 40;
	spinner.spinner = 'soccerHeader';
	spinner.text = `${chalk.green('Support Project by giving a ⭐ ')}`;
}, 2000);

setTimeout(() => {
	spinner.indent = 40;
	spinner.spinner = 'soccerHeader';
	spinner.text = `${chalk.yellow('Card sent to Press...')}`; 
}, 4000);

setTimeout(() => {
	spinner.indent = 40;
	spinner.spinner = 'soccerHeader';
	spinner.text = `${chalk.magentaBright('Card is Ready for Printing...')}`; 
}, 6000);

setTimeout(() => {
	spinner.indent = 40;
	spinner.spinner = 'soccerHeader';
	spinner.text = 'Your Card is About to Ready...'; 
}, 8000);

setTimeout(() => {
	spinner.indent = 40;
	spinner.spinner = 'soccerHeader';
	spinner.text = `${chalk.blueBright('Printing Done, Here We go:')}`; 
}, 10000);

setTimeout(() => {
	spinner.succeed(`${chalk.greenBright('Congratulations, Now you have a Identity in CLI World.😄')}`);
}, 12000);

