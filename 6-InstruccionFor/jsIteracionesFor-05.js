/*al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
	Ariel Nuñez-Ejercicio 5
*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);

	for (;numeroIngresado != 9;)
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);
	}
}//FIN DE LA FUNCIÓN