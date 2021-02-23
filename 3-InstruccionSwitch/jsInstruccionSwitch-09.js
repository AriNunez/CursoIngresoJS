/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final.

en Invierno: bariloche tiene un aumento del 20% cataratas y 
Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%.

en Verano: bariloche tiene un descuento del 20% cataratas y 
Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%.

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un 
aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento.
Ariel Nuñez- Ejercicio 9
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var estadiaBase;
	var porcentaje;
	var porcentajeAplicado;
	var precioFinal;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	estadiaBase = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cordoba":
				case "Cataratas":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;

		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;		
			}
			break;
		
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":		
					porcentaje = 10;
					break;
				
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;			
	}

	porcentajeAplicado = estadiaBase * porcentaje / 100;
	precioFinal = estadiaBase + porcentajeAplicado;
	alert ("El precio de la estadia de "+destinoIngresado+" en "+estacionIngresada+" es "+precioFinal);
}//FIN DE LA FUNCIÓN