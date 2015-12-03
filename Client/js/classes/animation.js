"use strict";

class Animation {

	constructor(img) {
		this.cat = new Cat(0, 100, 100, 400, 200);
		this.catSprite = new Sprite(img, this.cat);
		this.cat.spritePosition = 0;

		this.dateBefore;
		this.dateAfter;
		this.delta;
	}

	start() {
		// delete old content
		let c = document.getElementById("canvas");
		let ctx = c.getContext("2d");
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, 640, 480);

		this.dateBefore = new Date();

		requestAnimationFrame( this.update.bind(this) );
  		
	}

	render() {
		// console.log("position : " + this.cat.spritePosition );
		this.cat.x = 300;
		this.cat.y = 200;
		this.catSprite.draw();

		this.cat.spritePosition++;
		if (this.cat.spritePosition > 11 ) {
			this.cat.spritePosition = 0;
		}
	}

	update() {
		// console.log('update');

		this.dateAfter = new Date();
		console.log("before : " + this.dateBefore.getTime());
		console.log("after : " + this.dateAfter.getTime());
		this.delta = this.dateAfter.getTime() - this.dateBefore.getTime();
		console.log("delte => " + this.delta);

		if (this.delta < 100) {
			requestAnimationFrame( this.update.bind(this) );

		} else if  (this.delta >= 100 ) {

			this.dateBefore = this.dateAfter;

			// delete old content
			let c = document.getElementById("canvas");
			let ctx = c.getContext("2d");
			ctx.fillStyle = "#ffffff";
			// ctx.fillStyle = "#684684";
			ctx.fillRect(0, 0, 1280, 720);

			requestAnimationFrame( this.update.bind(this) );

	  		this.render();
		}

	}




}