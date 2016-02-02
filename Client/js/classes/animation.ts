"use strict";

import {Cat} from 'js/classes/cat';
import {Megaman} from 'js/classes/megaman';
import {World} from 'js/classes/world';

var keyFlags = {
	"left" : false,
	"right" : false,
	"up" : false,
	"down" : false,
};

export class Animation {

	constructor(spriteList) {
		this.canvasH = 720;
		this.canvasW = 1280;

		this.cat = new Cat(0, 1280-400, 300, 400, 200);
		this.catSprite = new Sprite(spriteList[0], this.cat);
		this.cat.spritePosition = 0;

		this.megaman = new Megaman(200, 200, 34, 40, spriteList[1]);
		var megaman = this.megaman;
		this.world = new World(this.canvasH , this.canvasW);

		this.dateBefore;
		this.dateAfter;
		this.delta;

		var elementPosX = document.getElementById('position-x');
		var elementPosY = document.getElementById('position-y');

		if (typeof(socket) !== "undefined" ) {
			socket.on('move', function (data) {
				elementPosX.innerHTML = data.x;
				elementPosY.innerHTML = data.y;
			});
		}

		// this.keyFlags = {
		// 	"left" : false,
		// 	"right" : false,
		// 	"up" : false,
		// 	"down" : false,
		// };

		// var keyFlags = this.keyFlags;

		let c = document.getElementById("canvas");
		c.addEventListener('keydown', function(event) {
		    switch(event.keyCode) {
		    	case 65 : { // gauche
		    		// megaman.x -= 2;
		    		keyFlags.left = true;
		    		break;
		    	}
		    	case 68 : { // droite
		    		// megaman.x += 2;
		    		keyFlags.right = true;
		    		break;
		    	}
		    	case 87 : {
		    		// megaman.y -= 2;
		    		keyFlags.up = true;
		    		break;
		    	}
		    	case 83 : {
		    		// megaman.y += 2;
		    		keyFlags.down = true;
		    		break;
		    	}
		    	default: break;
		    }
		}, false);

		c.addEventListener('keyup', function(event) {
		    switch(event.keyCode) {
		    	case 65 : { // gauche
		    		// megaman.x -= 2;
		    		keyFlags.left = false;
		    		break;
		    	}
		    	case 68 : { // droite
		    		// megaman.x += 2;
		    		keyFlags.right = false;
		    		break;
		    	}
		    	case 87 : {
		    		// megaman.y -= 2;
		    		keyFlags.up = false;
		    		break;
		    	}
		    	case 83 : {
		    		// megaman.y += 2;
		    		keyFlags.down = false;
		    		break;
		    	}
		    	default: break;
		    }
		}, false);
	}

	start() {
		// delete old content
		let c = document.getElementById("canvas");
		let ctx = c.getContext("2d");
		// ctx.translate(0, 480);
		// ctx.transform(1, 0, 0, -1, 0, canvas.height)

		ctx.fillStyle = "#ffffff";
		ctx.fillStyle = "#bbbbbb";
		ctx.fillRect(0, 0, this.canvasW, this.canvasH);

		this.dateBefore = new Date();

		requestAnimationFrame( this.update.bind(this) );
  		
	}

	render() {

		this.world.draw();

		// console.log("position : " + this.cat.spritePosition );
		// this.cat.x = 300 + Math.round( 10* Math.random() );
		// this.cat.y = 200;
		this.cat.x -= 10;
		if ( this.cat.x  === -400) {
			this.cat.x = 1280-400;
		}

		this.catSprite.draw();

		// console.log(keyFlags.left);
		if (keyFlags.left === true) {
			this.megaman.x -= 2;
		}
		if (keyFlags.right === true) {
			this.megaman.x += 2;
		}
		if (keyFlags.up === true) {
			this.megaman.y -= 2;
		}
		if (keyFlags.down === true) {
			this.megaman.y += 2;
		}
		this.megaman.draw();

		this.cat.spritePosition++;
		if (this.cat.spritePosition > 11 ) {
			this.cat.spritePosition = 0;
		}
	}

	update() {
		// console.log('update');

		this.dateAfter = new Date();
		// console.log("before : " + this.dateBefore.getTime());
		// console.log("after : " + this.dateAfter.getTime());
		this.delta = this.dateAfter.getTime() - this.dateBefore.getTime();
		// console.log("delta => " + this.delta);

		if (this.delta < 100) {
			requestAnimationFrame( this.update.bind(this) );

		} else if  (this.delta >= 100 ) {
			// 
			if (typeof(socket) !== "undefined" ) {
				socket.emit('position', { x: this.cat.x , y: this.cat.y  });
			}

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