/*Al ingresar una edad debemos informar si la persona 
es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años).
Ariel Nuñez-Ejercicio 6
*/

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
	if (edadPar > 17){
		alert ("Usted es mayor de edad.");
	}
	else 
	{
		if (edadPar < 13){
			alert ("Usted es menor.");
		}
		else
			alert ("Usted es adolescente.");
	}	
}