// P5.js 1.4.0

// Nord Modern Color Pallete
// Black 46, 52, 64
// Highlight 59, 66, 82
// Red 191, 97, 106
// Green 163, 190, 140
// Yellow 235, 203, 139
// Blue 128, 161, 193
// Purple 180, 142, 173
// Cyan 136, 191, 208
// White 229, 233, 240

function setup() {
	createCanvas(800, 800);
	frameRate(60);
	noStroke();
	fill(191, 97, 106)
	let x = 0;
	let y = 0;
}

let z = 0;

function draw() {
	background(46, 52, 64);
	// rect(380, 380, 40, 40);
	z = z + 1;
	x = cos((z / 8) + (1 / 20)) * 150;
	y = sin((z / 10) + (1 / 20)) * 150;
	rect(x + 380, y + 380, 40, 40);
}