function mostrar()
{
	var arrayNumeros;
	var numeroIngresado;
	var sumaArray=0;

	arrayNumeros = [];

	for(i=0;i<5;i++)
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		arrayNumeros.push(numeroIngresado);
		sumaArray += arrayNumeros[i];
	}

	alert (sumaArray);
}



/*{

	var miArray = new Array();
	var acum=0;
	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
		acum+=miArray[i];

	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acum+"</h1>")




}//FIN DE LA FUNCIÓN*/