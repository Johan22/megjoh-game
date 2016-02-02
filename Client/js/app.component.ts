import {Component} from 'angular2/core';
import {Animation} from 'js/classes/animation';


@Component({
	selector: 'megjoh',
	template: `<h1>Megjoh game !</h1>
	<div>
		X : 
		<span id="position-x"></span>
	</div>
	<div>
		Y : 
		<span id="position-y"></span>
	</div>
	<canvas id="canvas" tabindex="1" width="1280" height="720">
	</canvas>`
})

export class AppComponent {
	
	constructor() {

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
	}

}
