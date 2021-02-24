/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Ariel Nuñez - Ejercicio 8
*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta = true;

	while (respuesta)
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);
		if (numeroIngresado >= 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}

		if (numeroIngresado < 0) 
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = confirm ("Continuar?")
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN