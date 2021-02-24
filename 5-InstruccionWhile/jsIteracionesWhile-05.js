/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Ariel Nuñez-Ejercicio 5
*/
function mostrar()
{
	var sexoIngresado;
	
	while (!(sexoIngresado =="f" || sexoIngresado == "m"))
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN

//podemos usar toLowerCase() para transformar todos los caracteres en minuscula