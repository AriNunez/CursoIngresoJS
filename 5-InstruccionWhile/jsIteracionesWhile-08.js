/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
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
	respuesta='si';

	while (respuesta == "si")
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);
		while (numeroIngresado >= 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			respuesta = prompt ("Desea continuar?")
		}

		while (numeroIngresado < 0) 
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		respuesta = prompt ("Desea continuar?")
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN