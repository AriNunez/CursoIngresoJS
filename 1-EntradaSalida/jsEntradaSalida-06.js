/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var Resultado;
	var numeroUnoParseado;
	var numeroDosParseado;

	//Asignaciones
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformación
	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	//Suma
	Resultado = numeroUnoParseado + numeroDosParseado;
	

	//Mostrar
	alert("El resultado de la suma es: "+Resultado);
}

