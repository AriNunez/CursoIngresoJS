/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var numeroUnoPar;
	var numeroDosPar;
	var resultadoSuma;

	//Asignaciones
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformaciones
	numeroUnoPar = parseInt (numeroUno);
	numeroDosPar = parseInt (numeroDos);
	
	//Suma
	resultadoSuma = numeroUnoPar + numeroDosPar;

	//Mostrar
	alert("El resultado de la suma es: "+resultadoSuma);	
}

function restar()
{
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var numeroUnoPar;
	var numeroDosPar;
	var resultadoResta;

	//Asignaciones
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformaciones
	numeroUnoPar = parseInt (numeroUno);
	numeroDosPar = parseInt (numeroDos);

	//Resta
	resultadoResta = numeroUnoPar - numeroDosPar;

	//Mostrar
	alert("El resultado de la resta es: "+resultadoResta);
}

function multiplicar()
{ 
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var numeroUnoPar;
	var numeroDosPar;
	var resultadoMultiplicar;

	//Asignaciones
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformaciones
	numeroUnoPar = parseInt (numeroUno);
	numeroDosPar = parseInt (numeroDos);

	//Multiplicación
	resultadoMultiplicar = numeroUnoPar * numeroDosPar;

	//Mostrar
	alert("El resultado de la multiplicación es: "+resultadoMultiplicar);
}

function dividir()
{
	//Declaraciones
	var numeroUno;
	var numeroDos;
	var numeroUnoPar;
	var numeroDosPar;
	var resultadoDivisión;

	//Asignaciones
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//Transformaciones
	numeroUnoPar = parseInt (numeroUno);
	numeroDosPar = parseInt (numeroDos);

	//División
	resultadoDivisión = numeroUnoPar / numeroDosPar;

	//Mostrar
	alert("El resultado de la división es: "+resultadoDivisión);
}

