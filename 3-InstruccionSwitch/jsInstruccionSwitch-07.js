/*Al selecionar un destino , indicar el punto cardinal de 
nuestro pais en donde se encuentra Norte, Sur, Este u Oeste.
Ariel Nuñez-Ejercicio 7
*/
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	switch (destinoIngresado) {
		case "Ushuaia":
		case "Bariloche":
			alert ("Sur");
			break;
		
		case "Cataratas":
			alert ("Norte");
			break;
		
		case "Mar del plata":
			alert ("Este");
			break;
	}

}//FIN DE LA FUNCIÓN