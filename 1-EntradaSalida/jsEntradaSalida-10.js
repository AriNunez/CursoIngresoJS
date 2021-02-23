/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaraciones
	var datoImporte;
	var datoDescuento;
	var datoImportePar;
	var resultadoDescuento;
	var resultadoConDescuento;

	//Asignaciones
	datoImporte = txtIdImporte.value;
	datoDescuento = 25;

	//Transformación
	datoImportePar = parseInt (datoImporte);

	//Descuento
	resultadoDescuento = (datoImportePar * datoDescuento) / 100;
	resultadoConDescuento = datoImportePar - resultadoDescuento;

	//Mostrar
	txtIdResultado.value = resultadoConDescuento;
}

