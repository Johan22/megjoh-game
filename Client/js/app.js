"use strict";

class Main {


	constructor() {

	}

	init() {

		let imageCollector = function(expectedCount, completeFn){
		  let receivedCount;
		  return function(){
		    if(++receivedCount == expectedCount){
		      completeFn();
		    }
		  };
		}();

		let ic = imageCollector(1, function(){
			console.log("test");
			let animation = new Animation(img);
			animation.start();
		});


		let img = new Image();
		img.src = 'img/cat_sprite.png';

		img.load = ic;

		// img.onload = function() {
		// 	let animation = new Animation(img);
		// 	animation.start();
		// };

	}
}

var main = new Main();
main.init();


