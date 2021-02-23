/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	
	nombreIngresado=txtIdNombre.value;
	
	//Tambien podemos usar document.getElementById("aca copiamos del html").value

	alert("Tu nombre es: "+nombreIngresado);

}
