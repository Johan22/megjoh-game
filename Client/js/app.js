"use strict";

class Main {


	constructor() {

	}

	init() {


		let start = function() {
			let animation = new Animation([img, imgMegaman]);
		 	animation.start();
		}


		let nbImages = 2;
		let countImages = 0;

		let loadImage = function(){
			countImages++;
			if (countImages === nbImages) {
				start();
			}
		};

		// let spriteList = [];

		let img = new Image();
		img.src = 'img/cat_sprite.png';
		img.load = loadImage();

		let imgMegaman = new Image();
		imgMegaman.src = 'img/mega1.png';
		imgMegaman.load = loadImage();

		// spriteList.push(img, imgMegaman)
	}
}

var main = new Main();
main.init();


