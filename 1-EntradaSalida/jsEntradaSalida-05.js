/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaraciones
	var nombreIngresado;
	var edadIngresado;

	//Asignaciones
	nombreIngresado = txtIdNombre.value;
	edadIngresado = txtIdEdad.value;
	
	//Mostrar
	alert("Usted se llama "+nombreIngresado+ " y tiene " +edadIngresado+ " años.");
}

