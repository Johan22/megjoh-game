"use strict";

// cat 400*120

class Sprite {

	constructor(img, object) {
		this.img = img;
		this.object = object;
	}

	draw() {
		let c = document.getElementById("canvas");
		let ctx = c.getContext("2d");

		let canvasPosX = 0,
			canvasPosY = this.object.spritePosition * this.object.height;
 
		ctx.drawImage(this.img,
		    0,
		    canvasPosY,
		    this.object.width,
		    this.object.height,
		    this.object.x,
		    this.object.y,
		    this.object.width,
		    this.object.height
		);

	}
}