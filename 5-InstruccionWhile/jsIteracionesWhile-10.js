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
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivos=0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var resultado;
	var promedioPositivos;
	var promedioNegativos;
	var resultadoSumaResta;


	respuesta=true;

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
					if (condition) {
						
					}
				}
			}
		}

		cantidadPares = //FIJARSE ESTO
		respuesta=confirm("Desea continuar?");
	
	}while (respuesta);//fin del while

	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivos / contadorPositivos;
	resultadoSumaResta = sumaPositivos - sumaNegativos;//AGREGAR AL DOCUMENT



	document.write("La suma de negativos es :"+sumaNegativos+". El promedio de los números negativos sumados es: "+promedioNegativos+
	". La suma de positivos es: "+sumaPositivos+ ". El promedio de los positivos sumados es: "+promedioPositivos+
	". La cantidad de números negativos es: "+contadorNegativos+". La cantidad de números positivos es: "+contadorPositivos+
	". La cantidad de ceros es: "+cantidadCeros);

	//para los pares podemos usar el operador moludo %, nos podemos dar cuenta por el resto, si es par tiene que dar resto 0
	//ingresar validacion de caracteres no validos para el caso de queres ingresar letras.
}//FIN DE LA FUNCIÓN