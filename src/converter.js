function hexToHSL(hex) {
	// Convert hex to RGB first
	let H = hex.trim();
	let r = 0,
		g = 0,
		b = 0;
	if (H.length == 4) {
		r = '0x' + H[1] + H[1];
		g = '0x' + H[2] + H[2];
		b = '0x' + H[3] + H[3];
	}
	else if (H.length == 7) {
		r = '0x' + H[1] + H[2];
		g = '0x' + H[3] + H[4];
		b = '0x' + H[5] + H[6];
	}
	// Then to HSL
	r /= 255;
	g /= 255;
	b /= 255;
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	if (delta == 0) h = 0;
	else if (cmax == r) h = ((g - b) / delta) % 6;
	else if (cmax == g) h = (b - r) / delta + 2;
	else h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	if (h < 0) h += 360;

	l = (cmax + cmin) / 2;
	s =

			delta == 0 ? 0 :
			delta / (1 - Math.abs(2 * l - 1));
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

function RGBToHSL(rgbString) {
	const myArr = rgbString.trim().split(',');
	let r = parseInt(myArr[0].split('(')[1].trim());
	let g = parseInt(myArr[1].trim()[0]);
	let b = parseInt(myArr[2].trim()[0]);
	// console.log(myArr);s
	// Make r, g, and b fractions of 1
	r /= 255;
	g /= 255;
	b /= 255;

	// Find greatest and smallest channel values
	let cmin = Math.min(r, g, b),
		cmax = Math.max(r, g, b),
		delta = cmax - cmin,
		h = 0,
		s = 0,
		l = 0;

	// Calculate hue
	// No difference
	if (delta == 0) h = 0;
	else if (cmax == r)
		// Red is max
		h = ((g - b) / delta) % 6;
	else if (cmax == g)
		// Green is max
		h = (b - r) / delta + 2;
	else
		// Blue is max
		h = (r - g) / delta + 4;

	h = Math.round(h * 60);

	// Make negative hues positive behind 360°
	if (h < 0) h += 360;

	// Calculate lightness
	l = (cmax + cmin) / 2;

	// Calculate saturation
	s =

			delta == 0 ? 0 :
			delta / (1 - Math.abs(2 * l - 1));

	// Multiply l and s by 100
	s = +(s * 100).toFixed(1);
	l = +(l * 100).toFixed(1);

	return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

module.exports.hexToHSL = hexToHSL;
module.exports.RGBToHSL = RGBToHSL;
