/*Al presionar el botón pedir 5 números 
e informar la suma acumulada y el promedio.
Ariel Nuñez-Ejercicio 6
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while (contador < 5) 
	{
		numeroIngresado = prompt ("Ingrese un numero:");
		numeroIngresado = parseInt (numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador = contador + 1;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN