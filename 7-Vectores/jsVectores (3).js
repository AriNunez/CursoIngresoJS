
//array en for
function mostrar()
{
	var arrayNumeros;
	var numeroIngresado;

	arrayNumeros =[];
	
	for(i=0 ; i<5; i++)
	{
		numeroIngresado = parseInt(prompt ("Ingrese un número"));
		arrayNumeros.push (numeroIngresado);
	}

	for (i=0 ; i<arrayNumeros.length ; i++)
	{
		alert (arrayNumeros[i]);
	}
}

//array en while




/*{

	var miArray = new Array();

	for (var i = 0; i <5; i++)
	{
		miArray[i]=parseInt(prompt("Ingrese un numero"));
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+miArray[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN*/