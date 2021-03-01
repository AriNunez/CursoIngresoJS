/*
	al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.

	Ariel Nuñez-Ejercicio 1
*/

function mostrar()
{
	//var i=0; podemos incluirlo, o directamnete asignarlo e inicializarlo dentro del for.

	for (i = 0 ; i < 10 ; i++)
	{
		console.log (i);
	}
}

/*
Es una estructura iterativa, se utiliza cuando sabemos la cantidad de veces que queremos hacer algo.

for (variable que podemos declarar dentro  ; condicion que se evalua ; que le hacemos a la variable luego de leer la condicion i++)
{
	alert (i); se ejecutaria 10
}

En for se suele utilizar i y j, como indices. Es una costumbre. Podemos usar el nombre que se nos ocurra igualmente

dentro del for, podemos usar un if break para cortar con la iteracion.
for ()
{
	----
	if (i == 4)
	{
		break;
	}
}

tambien podemos un usar un continue
for ()
{
	----
	if (i == 8)
	{
		continue; lo que hace es saltear por ejemplo en este caso el aler 8;
	}
	alert (i);
}

					ARRAY

	Es una variable que puede tener adentro más de un valor, 
	podemos guardar datos que ingrese el usuario en un solo lugar, y no es necesario procesarlos en el momento.

	Para declararlos es parecido a la variable comun pero de la siguiente forma:

						0  1  2  3  4
	var arrayEdades = [20,30,40,50,60];
	
	para mostrar el dato que querramos que este dentro, se hace por posiciones:

	0 seria 20, 1 seria 30 y asi sucesivamente.
	
	Esto podemos usarlo con un for para poder mostrar los datos que se encuentran dentro.

	for (var i = 0; i<5 ; i++)
	{
		console.log (arrayEdades[i]);
	}

	Tambien podemos sobreescribir cualquier posicion del array:

	arrayEdades[0] = 55; Antes la posicion 0 valía 20, al momento de sobreescribirlo, la posicion 0 valdria 55

	Para agregarle algun dato mas al array podemos utilizar:
	arrayEdades.push (100); Esto ingresaria el 100 en la posición 5.
	
	No mezclar los datos que le metemos al array, no ingresar tanto numericos como strings.

	Para cargar los datos que me va dando el usuario:
	Ejemplo:
		var arrayEdades = [];
		var edad;
		for (var i=0;i<10;i++) En este caso estariamos pidiendo 10 datos
		{
			edad= parseInt(prompt("Edad?"));
			arrayEdades.push (edad);
		}

	arrayEdades.lenght() Te dice cuantos elementos cargarste en el array, o tambien podemos armar un contadorArray++ para ir cargando de a uno.


*/