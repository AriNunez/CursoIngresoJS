/*al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
Ariel Nuñez-Ejercicio 3
*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) {
		case "Febrero":
			alert ("Este mes no tiene más de 29 días.");
			break;
	
		default:
			alert ("Este mes tiene 30 o más días.");
			break;
	}
}//FIN DE LA FUNCIÓN