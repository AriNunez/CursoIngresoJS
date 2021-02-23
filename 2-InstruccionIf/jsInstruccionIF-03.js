/*Al ingresar una edad debemos informar 
si la persona es mayor de edad, sino informar que es un menor de edad.*/

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
		alert ("Usted es mayor de edad.");
	}
	else 
	{
		alert ("Usted es menor de edad.");
	}
}