/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 

Ariel Nuñez-Ejercicio 10
*/
function mostrar()
{
	
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var contadorPositivos;
	var contadorNegativos;
	var cantidadCeros;
	var cantidadPares;
	var resultado;
	var promedioPositivos;
	var promedioNegativos;
	var resultadoSumaResta;
	var resultadoResto;

	respuesta=true;
	sumaNegativos=0;
	sumaPositivos=0;
	contadorPositivos=0;
	contadorNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;

	do
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);

		if (numeroIngresado < 0) 
		{
			sumaNegativos = sumaNegativos + numeroIngresado;
			resultado = sumaNegativos;
			contadorNegativos++;
		}
		else
		{
			if (numeroIngresado > 0)
			{
				sumaPositivos = sumaPositivos +numeroIngresado;
				resultado = sumaPositivos;
				contadorPositivos++;
			}
			else
			{
				if (numeroIngresado == 0)
				{
					cantidadCeros++;
				}
				else
				{
					alert ("El dato ingresado no es válido.");
				}
			}
		}

		resultadoResto = numeroIngresado % 2;
		if (resultadoResto == 0) 
		{
			cantidadPares++;
		}
		
		respuesta=confirm("Desea continuar?");
	
	}while (respuesta);

	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivos / contadorPositivos;
	resultadoSumaResta = sumaPositivos + sumaNegativos;

	document.write("La suma de negativos es :"+sumaNegativos+". El promedio de los números negativos sumados es: "+promedioNegativos+
	". La suma de positivos es: "+sumaPositivos+ ". El promedio de los positivos sumados es: "+promedioPositivos+". La diferencia entre positivos y negativos es: "+resultadoSumaResta+
	". La cantidad de números negativos es: "+contadorNegativos+". La cantidad de números positivos es: "+contadorPositivos+
	". La cantidad de ceros ingresados es: "+cantidadCeros+". La cantidad de números pares ingresados es: "+cantidadPares);

}//FIN DE LA FUNCIÓN