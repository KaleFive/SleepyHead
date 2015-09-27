$(document).ready(function(){

	var options = {
		verbose: true,
		interval: 35,
		showVideo: true,
		elementId: 'container'
	};

	var p = new Panopticon(options);

	p.onFrame(detectMotion);

	function detectMotion(array) {
		console.log("ARRAY: ", array)
    if(array[0] === 'hit') {
			document.getElementById("tSwiftBlankSpace").play();
		};
	};
});

	// var top = 200;
	// var side = 600;
	// var rotate = 0;
  //
	// var speedUp = 0;
	// var speedSide = 0;
	// var rotateSpeed = 0;

	// function moveBallAround(obj){

		//obj has three properties
		//
		//left--how much movement left is in the frame
		//top--how much movement towards the top is in the frame
		//twist--how much twistiness is in the frame

		// speedUp = speedUp + obj.top * .07;
		// speedSide = speedSide + obj.left * .07;
		// rotateSpeed = rotateSpeed + obj.twist * .07;

		// top = top + speedUp;
		// side = side + speedSide;
		// rotate = rotate + rotateSpeed;

		// if (top < 0){top = 0;}
		// if (top > 560){top = 560;}
		// if (side < 0){side=0;}
		// if (side > 1180){side = 1180}

		// document.getElementById("temp").style.top = top+"px";
		// document.getElementById("temp").style.left = side+"px";
		// document.getElementById("temp").style.transform = "rotate("+Math.round(rotate)+"deg)";

	// };
