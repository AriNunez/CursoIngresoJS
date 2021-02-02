/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declaraciones
	var datoSueldo;
	var datoAumento;
	var datoSueldoPar;
	var resultadoAumento;

	//Asignaciones
	datoSueldo = txtIdSueldo.value;
	datoAumento = 1.10;
	
	//Transformación
	datoSueldoPar = parseInt (datoSueldo);

	//Aumento
	resultadoAumento = (datoSueldoPar * datoAumento);

	//Mostrar
	txtIdResultado.value = resultadoAumento;
}
