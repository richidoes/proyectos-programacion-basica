'use strict'

// Model to use for the object "Personaje"
class Personaje
{
	constructor(nombre, vida, arma, daño, alineacion, voz)
	{
		this.imagen = new Image();
		this.nombre = nombre;
		this.vida = vida;
		this.arma = arma;
		this.daño = daño;
		this.alineacion = alineacion;
		this.frase = voz;
		

		this.imagen.src = imagenes[this.nombre];
	}
	hablar()
	{
		alert(this.frase);
	}
	mostrar()
	{
		var nuevaDiv = document.createElement('div');
		/* with this line we create the tag 'div'



		Using the appendChild () method all the
		character stats as well as his name, image and jumps
		line, uniting everything to the page body.  */
		var divCabecera = document.createElement('h2');
		divCabecera.innerHTML = this.nombre + '<br> Estadisticas';
		divCabecera.setAttribute("class", "contenedor");

		var saltoLinea = document.createElement('br');
		nuevaDiv.appendChild(this.imagen);
		nuevaDiv.appendChild(saltoLinea);
		nuevaDiv.appendChild(divCabecera);
		document.body.appendChild(nuevaDiv);
		

		//Storage the string and his values to show in the body
		var coleccion = {
			'Vida': this.vida,
			'Arma': this.arma,
			'Daño': this.daño,
			'Alineacion': this.alineacion,
			'Frase': this.frase
		};
		/*this array only serve to decrease the code lines for more late, using "for-in" instead of add many lines of text of cells "tr" and "td". Besides it's more easy to read.





		The method is simple:
		a) HTML table tag is created
		b) the HTML tbody tag is created
		c) create a cycle where tr and td tags are created with the data we need to present, helping us with the CLASS and the array
		d) append the tr and td tags to the tbody, and the tbody to the table tag
		*/
		var tabla = document.createElement('table');
		var tbody = document.createElement('tbody');
		
		for(var stat in coleccion)
		{
			var filaTexto = "<tr><td>" + stat + " </tr></td><tr><td>\
			" + coleccion[stat] + "</tr></td>";
			var fila = document.createElement('tr');
			fila.innerHTML = filaTexto;
			tbody.appendChild(fila);
		}
		tabla.appendChild(tbody);
		nuevaDiv.appendChild(tabla);

		
	}	
}

