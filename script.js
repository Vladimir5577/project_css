var images = [
	"img/bars_1.jpeg",
	"img/bars_2.jpg",
	"img/1.png",
	"img/bars_3.jpg"
	
];
var i = 0;

function slide() {
	document.getElementById("first_image").src = images[i];
	if (i < (images.length - 1)) {
		i++;
	} else {
		i = 0;
	}
}

setInterval(slide, 1500);
