'use strict'

//Image collection with the location indexed.
var imagenes = [];

imagenes["Jill Valentine"] = "img/jill.png";
imagenes["Nemesis"] = "img/nemesis.png";
imagenes["Carlos Oliveira"] = "img/carlos.png";
imagenes["Nikolai Zinoviev"] = "img/nikolai.png";

//here we create and store the objects of each character 
var seleccion = [];

seleccion.push(new Personaje("Jill Valentine", 100, "Glock-19", 30, "Bueno", "You want stars?, i'll give you stars"));
seleccion.push(new Personaje("Nemesis", 10000,"Lanzacohetes", 80,"Neutral", "STARS!!"));
seleccion.push(new Personaje("Carlos Oliveira", 100,"AR M4A1", 45,"Bueno", "Are you ok?"));
seleccion.push(new Personaje("Nikolai Zinoviev", 100,"beretta 45", 30,"Malo", "Good luck, 'friend'"));


/*  Loop for show the objects of each character in the body
of the page using the function "mostrar" located in 
personajesClase.js   */

for (var personaje in seleccion)
{
	seleccion[personaje].mostrar();
}





