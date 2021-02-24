/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
Ariel Nuñez-Ejercicio 9
*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=true;
	respuesta=true;
	
	do
	{
		numeroIngresado = prompt ("Ingrese un número");
		numeroIngresado = parseInt (numeroIngresado);

		if (banderaDelPrimero)
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero =false;
		}
		else
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{ 
				if (numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = confirm ("Desea continuar?");
	}while (respuesta);

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN