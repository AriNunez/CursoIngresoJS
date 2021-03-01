/*al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

Ariel Nuñez- Ejercicio 8
*/

function mostrar()
{
	var numeroIngresado;
	var acumulador;
	var resultado;

	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);
	acumulador = 0;
	
	for (i=0;numeroIngresado+1 != i;i++)
	{
		resultado = numeroIngresado % i;

		if (resultado == 0) 
		{
			acumulador++;
		}

	}

	if (acumulador == 2) 
	{
		alert ("Es primo");
	}
	else
	{
		alert ("No es primo");
	}

}//FIN DE LA FUNCIÓN