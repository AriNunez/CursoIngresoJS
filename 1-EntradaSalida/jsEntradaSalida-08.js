/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var numeroUnoPar;
	var numeroDosPar;
	var resultadoResto;

	//Asignaciones
	numeroUno = txtIdNumeroDividendo.value;
	numeroDos = txtIdNumeroDivisor.value;

	//Transformaciones
	numeroUnoPar = parseInt (numeroUno);
	numeroDosPar = parseInt (numeroDos);

	//Resto
	resultadoResto = numeroUnoPar % numeroDosPar;

	//Mostrar
	alert("El resultado del resto es: "+resultadoResto);
}


