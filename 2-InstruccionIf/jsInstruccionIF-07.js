/*Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", mostrar el siguiente mensaje:
'Es muy pequeño para NO ser soltero.'
	Ariel Nuñez-Ejercicio 7
*/

function mostrar()
{
	//Declaraciones
	var edad;
	var edadPar;
	var estado;

	//Asignaciones
	edad = txtIdEdad.value;
	estado = estadoCivil.value;

	//Transformaciones
	edadPar = parseInt (edad);

	//Condición
	if (edadPar < 18 && estado != "Soltero" ){
		alert ("Es muy pequeño para no ser soltero.");
	}
}//FIN DE LA FUNCIÓN