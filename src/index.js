#!/usr/bin/env node
const inquirer = require('inquirer');
const { hexToHSL, RGBToHSL } = require('./converter');
const createVariables = require('./createVariables');
const colors = require('colors');

inquirer
	.prompt([
		{
			type    : 'rawlist',
			choices : [
				'RGB',
				'HEX',
				'HSL'
			],
			name    : 'type',
			message : 'Choose a format for giving input color to generate variables'
		},
		{
			type    : 'input',
			name    : 'color',
			message :
				'Enter a color in choosen format e.g RGB like rgb(r,g,b) or HEX Code like #aa23a4 or HSL like hsl(330,100%,50%)'
		},
		{
			type    : 'input',
			name    : 'variable',
			message : 'Enter a variable name'
		}
	])
	.then((answers) => {
		const { type, color, variable } = answers;
		if (type == 'RGB') {
			createVariables(RGBToHSL(color), variable);
		}
		else if (type == 'HEX') {
			createVariables(hexToHSL(color), variable);
		}
		else {
			createVariables(color, variable);
		}
	})
	.catch((error) => {
		console.log(colors.red.bold(error));
	});
