/*Al ingresar una edad debemos informar 
si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .*/

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
	if (edadPar >=13 && edadPar<=17){
		alert ("Usted es adolescente.");
	}
}