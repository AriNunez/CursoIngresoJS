/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Ariel Nuñez- Ejercicio 4
*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado = parseInt (numeroIngresado);

	while (!(numeroIngresado >= 0 && numeroIngresado <= 9))
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
		numeroIngresado = parseInt (numeroIngresado);
	}
	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN