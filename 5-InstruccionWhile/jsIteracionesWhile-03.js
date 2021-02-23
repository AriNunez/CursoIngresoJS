/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
Ariel Nuñez-Ejercicio 3 arreglado
*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese la clave.");

	while (claveIngresada != "utn750") 
	{
		alert ("Clave incorrecta");
		claveIngresada = prompt("ingrese la clave.");
	}
	alert ("Clave correcta");
}//FIN DE LA FUNCIÓN
