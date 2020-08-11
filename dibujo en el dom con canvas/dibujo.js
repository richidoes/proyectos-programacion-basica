"use strict";

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

//properties for draw in canvas:
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

//listen event
boton.addEventListener("click", dibujoPorClick);

//basic structure for draw lines in canvas:
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

//quantity of lines that will draw, given by the user
function dibujoPorClick() {
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var espacio = ancho / lineas;
  var contorno = ancho - 1;

	//loop for draw all the lines the user want
  while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);

    dibujarLinea("blue", 0, yi, xf, 300);
	console.log("Linea " + l);
	
    l = l + 1;
  }

  //draw a top/left border
  dibujarLinea("green", 1, 1, 0, contorno);
  dibujarLinea("green", 1, contorno, contorno, contorno);

  //draw a bottom/right border
  dibujarLinea("green", contorno, 0, 1, 1);
  dibujarLinea("green", contorno, contorno, contorno, 1);
}
