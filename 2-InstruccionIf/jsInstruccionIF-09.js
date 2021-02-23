/*Al presionar el Botón, mostrar un número 
Random del 1 al 10 inclusive.
Ariel Nuñez-Ejercicio 9
*/

function mostrar()
{
	var numero;
	var maximo;
	var minimo;

	maximo = 100;
	minimo = 1;
	numero = Math.round (Math.random() * (maximo - minimo) + minimo);

	if (numero >=1 && numero <= 10)
	{
		alert (numero);
	}
}//FIN DE LA FUNCIÓN