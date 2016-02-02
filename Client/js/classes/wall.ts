"use strict";


import {Objet} from 'js/classes/objet';

export class Wall extends Objet{

	constructor(x, y, width, height, color) {
		super(x , y, width, height);
		this.color = color || "#7F3300";
	}


	draw() {
		let c = document.getElementById("canvas");
		let ctx = c.getContext("2d");

		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);

	}

}