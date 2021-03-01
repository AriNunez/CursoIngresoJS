/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.

Ariel Nuñez-Ejercicio 7
*/
function mostrar()
{
	//Con array- pedir numeros al usuario, los que quiera, recorrer el array
	//con while y determinar el maximo, minimo y promedio, todo con distinto for.

	var arrayNumeros;
	var numeroIngresado;
	var continuar = true;
	var acumulador=0;
	var numeroMaximo;
	var numeroMinimo;
	var promedio;

	arrayNumeros =[];

	do
	{
		numeroIngresado = parseInt (prompt ("Ingrese un número"));
		arrayNumeros.push(numeroIngresado);

		continuar = confirm("¿Desea seguir ingresando números?");
	}while(continuar);

	numeroMaximo = arrayNumeros[0];
	numeroMinimo = arrayNumeros[0];

	for()
	{
		
	}


}




//Forma normal
/*{
	var numeroIngresado;
	var acumuladorDivisores;
	var resultadoDivisor;
	
	numeroIngresado = prompt ("Ingrese un número");
	numeroIngresado = parseInt (numeroIngresado);
	acumuladorDivisores = 0;

	for (i = 1; numeroIngresado+1 != i ; i++)
	{
		resultadoDivisor = numeroIngresado % i;

		if (resultadoDivisor == 0) 
		{
			alert ("Este número es divisor del número ingresado: "+i);
			acumuladorDivisores++;
		}
	}

	alert ("Cantidad de divisores: "+acumuladorDivisores);

}//FIN DE LA FUNCIÓN*/