"use strict";

import {Wall} from 'js/classes/wall';

export class World {

	constructor(canvasH, canvasW) {
		this.canvasH = canvasH;
		this.canvasW = canvasW;

		this.wallList = [];
		this.wallList.push( new Wall(200, this.canvasH-100, 150, 100) );
		this.wallList.push( new Wall(350, this.canvasH-250, 150, 250, '#986532') );
		this.wallList.push( new Wall(500, this.canvasH-50, 150, 50, '#321654') );
	}


	draw() {

		this.drawWalls();

	}

	drawWalls() {
		for (let wall of this.wallList) {
			wall.draw();
		}
	}

}