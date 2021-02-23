/*Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Ariel Nuñez-Ejercicio 8
*/
function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	switch (destinoIngresado) {
		case "Mar del plata":
		case "Cataratas":
			alert ("Calor");
			break;
	
		case "Ushuaia":
		case "Bariloche":
			alert("Frio");
			break;
	}
}//FIN DE LA FUNCIÓN