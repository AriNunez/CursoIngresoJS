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

	//Asignaciones
	datoImporte = txtIdImporte.value;
	datoDescuento = 0.25;

	//Transformación
	datoImportePar = parseInt (datoImporte);

	//Descuento
	resultadoDescuento = datoImportePar -(datoImportePar * datoDescuento);

	//Mostrar
	txtIdResultado.value = resultadoDescuento;
}
