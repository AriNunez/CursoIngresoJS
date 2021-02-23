/*Al ingresar una edad que sea igual a 15,
 mostrar el mensaje "niña bonita".*/

function mostrar()
{
	//Declaraciones
	var edad;
	var edadPar;

	//Asignaciones
	edad = txtIdEdad.value;

	//Transformacion
	edadPar = parseInt (edad);

	//Condición
	if (edadPar == 15){

		alert ("Niña bonita");
	}

	//FIN DE LA FUNCIÓN
	alert ("Fin de la función");
}