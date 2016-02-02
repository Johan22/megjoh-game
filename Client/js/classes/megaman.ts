"use strict";

import {Objet} from 'js/classes/objet';

export class Megaman extends Objet {

	constructor(x, y, width, height, img) {
		super(x , y, width, height);
		// this.width = width;
		// this.height = height;
		// this.x = x;
		// this.y = y;
		this.img = img;
		this.move = "standy";
		this.spritePosition = 0;
		this.nbSpritesWalk = 5;
		this.ticks = 0;
	}

	move() {
		
	}

	draw() {
		

		let c = document.getElementById("canvas");
		let ctx = c.getContext("2d");

		let canvasPosX = 0,
			canvasPosY = this.spritePosition * this.height;
 
		ctx.drawImage(this.img,
		    0,
		    canvasPosY,
		    this.width,
		    this.height,
		    this.x,
		    this.y,
		    this.width,
		    this.height
		);

		if (this.ticks % 4 === 0) {
			this.ticks = 0;
			this.spritePosition++;

			if (this.spritePosition === this.nbSpritesWalk-1 ) {
				this.spritePosition = 0;
			}

		}

		this.ticks++; 

	}


}