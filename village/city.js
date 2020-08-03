'use strict'
// get canvas area
var vrc = document.getElementById("racooncity");
var papel = vrc.getContext("2d");

//Event to move leon
document.addEventListener("keydown", moverLeon);



// store location and status for objects
var fondo = {
	url: "tile.png",
	cargaOK: false
};

var vaca = {
	url: "vaca.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var pollo = {
	url: "pollo.png",
	cargaOK: false
};
var leon = {
	url: "leon2.png",
	cargaOK: false
}

// Store keycodes 
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

//create numbers for x and y to establish a random position for objects:

//cow
var vx = [];
var vy = [];
var cantidad = aleatorio(1, 10);
for (var v = 0; v < cantidad; v++) {
	var x = aleatorio(0, 7);
	var y = aleatorio(0, 10);
	var x = x * 60;
	var y = y * 40;
	vx.push(x);
	vy.push(y);
}
//chicken
var px = [];
var py = [];
var cantidad = aleatorio(1, 10);
for (var v = 0; v < cantidad; v++) {
	var x = aleatorio(0, 7);
	var y = aleatorio(0, 10);
	var x = x * 60;
	var y = y * 40;
	px.push(x);
	py.push(y);
}
//pig
var cx = [];
var cy = [];
var cantidad = aleatorio(1, 10);
for (var v = 0; v < cantidad; v++) {
	var x = aleatorio(0, 7);
	var y = aleatorio(0, 10);
	var x = x * 60;
	var y = y * 40;
	cx.push(x);
	cy.push(y);
}
//Leon
var lx = aleatorio(0, 7);
var ly = aleatorio(0, 10);
var lx = lx * 60;
var ly = ly * 40;


//load images
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

leon.imagen = new Image();
leon.imagen.src = leon.url;
leon.imagen.addEventListener("load", cargarLeon);




// Verify images have been loaded
function cargarFondo(){
	fondo.cargaOK = true;
	dibujar();
}
function cargarVacas(){
	vaca.cargaOK = true;
	dibujar();
}
function cargarPollos(){
	pollo.cargaOK = true;
	dibujar();
}
function cargarCerdos(){
	cerdo.cargaOK = true;
	dibujar();
}
function cargarLeon(){
	leon.cargaOK = true;
	dibujar();
}




// When the images are loaded show characters
function dibujar(){
	
	if(fondo.cargaOK){

		papel.drawImage(fondo.imagen, 0, 0);
	}
	if(vaca.cargaOK){

		colocarAnimales(vaca.imagen, vx, vy);

	}
	if(pollo.cargaOK){

		colocarAnimales(pollo.imagen, px, py);

	}
	if(cerdo.cargaOK){

		colocarAnimales(cerdo.imagen, cx, cy);

	}
	
	if(leon.cargaOK){

		papel.drawImage(leon.imagen, lx, ly);
		
	}
}



/*  Make leon move using the directional keys ( We used 
the method .drawImage() from canvas to render the image of leon 
on the new position giving it the coordinates from the current 
position of the directional keys)  */
function moverLeon(evento){
	
	// change this value if you want to move leon more or less steps
	var movimiento = 5;

	/* Keeps printed the animals and the background using the previously 
	calculated values */
	papel.drawImage(fondo.imagen, 0, 0);
	colocarAnimales(vaca.imagen, vx, vy);
	colocarAnimales(pollo.imagen, px, py);
	colocarAnimales(cerdo.imagen, cx, cy);

	switch(evento.keyCode) {

		case teclas.UP:

			papel.drawImage(leon.imagen, lx, ly - movimiento);
			ly = ly - movimiento;
		break;

		case teclas.DOWN:

			papel.drawImage(leon.imagen, lx, ly + movimiento);
			ly = ly + movimiento;
		break;

		case teclas.LEFT:

			papel.drawImage(leon.imagen, lx - movimiento, ly);
			lx = lx - movimiento;
		break;

		case teclas.RIGHT:

			papel.drawImage(leon.imagen, lx + movimiento, ly);
			lx = lx + movimiento;
		break;

		default: 

			papel.drawImage(leon.imagen, lx, ly);
	}
}

// print the animal the times the number generated 
function colocarAnimales(animal, ax, ay){
	
	for (var v = 0; v < ax.length; v++) 
	{
		papel.drawImage(animal, ax[v], ay[v]);
	}
}

// rng (random number generator).
function aleatorio(min, maxi){

	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1) + min);
	return resultado;
}