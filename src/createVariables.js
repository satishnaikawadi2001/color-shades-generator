const fs = require('fs');
const colors = require('colors');

module.exports = (hslString, variableName) => {
	const myArr = hslString.trim().split(',');
	let hue = parseInt(myArr[0].split('(')[1]);
	let saturation = parseInt(myArr[1].split('%')[0]);
	let lightness = parseInt(myArr[2].split('%')[0]);
	const cwd = process.cwd();
	fs.writeFileSync(
		cwd + '/variables.css',
		`
        :root{
            --${variableName}-lighten-1:hsl(${hue},${saturation}%,${
			lightness + 5 < 100 ? lightness + 5 :
			100}%);
            --${variableName}-lighten-2:hsl(${hue},${saturation}%,${
			lightness + 10 < 100 ? lightness + 10 :
			100}%);
            --${variableName}-lighten-3:hsl(${hue},${saturation}%,${
			lightness + 15 < 100 ? lightness + 15 :
			100}%);
            --${variableName}-lighten-4:hsl(${hue},${saturation}%,${
			lightness + 20 < 100 ? lightness + 20 :
			100}%);
            --${variableName}-lighten-5:hsl(${hue},${saturation}%,${
			lightness + 25 < 100 ? lightness + 25 :
			100}%);
            --${variableName}-lighten-6:hsl(${hue},${saturation}%,${
			lightness + 30 < 100 ? lightness + 30 :
			100}%);
            --${variableName}-lighten-7:hsl(${hue},${saturation}%,${
			lightness + 35 < 100 ? lightness + 35 :
			100}%);
            --${variableName}-lighten-8:hsl(${hue},${saturation}%,${
			lightness + 40 < 100 ? lightness + 40 :
			100}%);
            --${variableName}-lighten-9:hsl(${hue},${saturation}%,${
			lightness + 45 < 100 ? lightness + 45 :
			100}%);
            --${variableName}-darken-1:hsl(${hue},${saturation}%,${
			lightness - 5 > 0 ? lightness - 5 :
			0}%);
            --${variableName}-darken-2:hsl(${hue},${saturation}%,${
			lightness - 10 > 0 ? lightness - 10 :
			0}%);
            --${variableName}-darken-3:hsl(${hue},${saturation}%,${
			lightness - 15 > 0 ? lightness - 15 :
			0}%);
            --${variableName}-darken-4:hsl(${hue},${saturation}%,${
			lightness - 20 > 0 ? lightness - 20 :
			0}%);
            --${variableName}-darken-5:hsl(${hue},${saturation}%,${
			lightness - 25 > 0 ? lightness - 25 :
			0}%);
            --${variableName}-darken-6:hsl(${hue},${saturation}%,${
			lightness - 30 > 0 ? lightness - 30 :
			0}%);
            --${variableName}-darken-7:hsl(${hue},${saturation}%,${
			lightness - 35 > 0 ? lightness - 35 :
			0}%);
            --${variableName}-darken-8:hsl(${hue},${saturation}%,${
			lightness - 40 > 0 ? lightness - 40 :
			0}%);
            --${variableName}-darken-9:hsl(${hue},${saturation}%,${
			lightness - 45 > 0 ? lightness - 45 :
			0}%);
            --${variableName}-greyish-2:hsl(${hue},${40}%,${lightness}%);
            --${variableName}-greyish-1:hsl(${hue},${45}%,${lightness}%);
            --${variableName}-greyish-3:hsl(${hue},${35}%,${lightness}%);
            --${variableName}-greyish-4:hsl(${hue},${30}%,${lightness}%);
            --${variableName}-greyish-5:hsl(${hue},${25}%,${lightness}%);
            --${variableName}-greyish-6:hsl(${hue},${20}%,${lightness}%);
            --${variableName}-greyish-7:hsl(${hue},${15}%,${lightness}%);
            --${variableName}-greyish-8:hsl(${hue},${10}%,${lightness}%);
        }
    `
	);

	console.log(colors.green.bold('variables.css created successfully with all variables!!'));
};
