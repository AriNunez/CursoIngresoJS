/*al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

Ariel Nuñez- Ejercicio 6
*/

function mostrar()
{
	var numeroIngresado;
	var resultadoResto;
	var acumuladorPares;

	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);
	acumuladorPares= 0;

	for (i = 1; numeroIngresado+1 != i; i++ )
	{
		resultadoResto = i % 2;

		if (resultadoResto == 0) 
		{
			alert ("Este número es par y se encuentra entre el 1 y el número ingresado: "+i);
			acumuladorPares++;
		}

	}
	alert ("Cantidad de números pares: "+acumuladorPares);


}//FIN DE LA FUNCIÓN