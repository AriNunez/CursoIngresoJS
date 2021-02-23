function mostrar()
{
	//Declaraciones
	var edad;
	var edadPar;

	//Asignaciones
	edad = txtIdEdad.value;

	//Transformaciones
	edadPar = parseInt (edad);

	//Condición
	if (edadPar >= 18){

		alert ("Usted es mayor de edad");
	}

	//FIN DE LA FUNCIÓN
	alert ("Fin de la función");
}