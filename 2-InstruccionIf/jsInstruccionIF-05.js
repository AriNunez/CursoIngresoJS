/*Al ingresar una edad solo debemos informar 
si la persona NO es adolescente.*/

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
	if (edadPar >= 13 && edadPar <= 17){}

	else 
	{
		alert ("Usted no es adolescente.");
	}
}