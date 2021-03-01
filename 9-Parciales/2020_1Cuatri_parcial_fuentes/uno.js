/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

Ariel Nuñez- Ejercicio 1 Parcial 2020
*/


function mostrar()
{
	var tipoProductos;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;
	var i;

	//CONTADORES
	var contadorBarbijos;
	var contadorJabones;
	var contadorAlcohol;

	contadorBarbijos = 0;
	contadorJabones = 0;
	contadorAlcohol = 0;


	//a) ALCOHOL MÁS BARATO, LA CANTIDAD DE UNIDADES Y EL FABRICANTE
	var unidadesAlcoholBarato;
	var fabricanteAlcoholBarato;
	var alcoholBarato;

	//B) DEL TIPO CON MAS UNIDADES, EL PROMEDIO POR COMPRA
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var promedioBarbijo;
	var promedioJabon;
	var promedioAlcohol;

	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;




	for (i = 0; i < 5 ; i++)
	{
		tipoProductos = prompt ("Ingrese un producto (barbijo / jabon / alcohol)");
		tipoProductos = tipoProductos.toLowerCase (tipoProductos);
		while (tipoProductos != "barbijo" && tipoProductos != "jabon" && tipoProductos != "alcohol")
		{
			tipoProductos = prompt ("Error, reingrese el producto");
			tipoProductos = tipoProductos.toLowerCase (tipoProductos);
		}

		precioProducto = parseInt(prompt("Ingrese el precio del producto (entre 100 y 300)"));
		while (!(precioProducto >= 100 && precioProducto <= 300))
		{
			precioProducto = parseInt(prompt("Error, reingrese el precio del producto"));
		}

		cantidadProducto = parseInt(prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
		while (!(cantidadProducto > 0 && cantidadProducto < 1001))
		{
			cantidadProducto = parseInt(prompt("Error, reingrese la cantidad de unidades"));
		}

		marcaProducto = prompt("Ingrese la marca del producto");

		fabricanteProducto = prompt("Ingrese el fabricante del producto");


		switch (tipoProductos) 
		{
			case "barbijo":
				contadorBarbijos++;
				acumuladorBarbijo = acumuladorBarbijo + cantidadProducto;
				break;

			case "jabon":
				contadorJabones++;
				acumuladorJabon = acumuladorJabon + cantidadProducto;
				break;

			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol = acumuladorAlcohol + cantidadProducto;
				if (contadorAlcohol == 1 || precioProducto < alcoholBarato)
				{
					alcoholBarato = precioProducto;
					unidadesAlcoholBarato = cantidadProducto;
					fabricanteAlcoholBarato = fabricanteProducto;
				}
				break;
		}
		
	}

	console.log ("Del alcohol más barato comprado, la cantidad de unidades es "+unidadesAlcoholBarato+" y el nombre del fabricante es "+fabricanteAlcoholBarato);
	if (acumuladorBarbijo > acumuladorJabon && acumuladorBarbijo > acumuladorAlcohol)
	{
		promedioBarbijo = acumuladorBarbijo / contadorBarbijos;
		console.log("Los barbijos son el tipo de producto con más unidades compradas, el promedio por compra es de: "+promedioBarbijo);
	}
	else
	{
		if (acumuladorJabon > acumuladorAlcohol) 
		{
			promedioJabon = acumuladorJabon / contadorJabones;
			console.log("Los jabones son el tipo de producto con más unidades compradas, el promedio por compra es de: "+promedioJabon);
		}
		else
		{
			promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
			console.log("El alcohol es el tipo de producto con más unidades compradas, el promedio por compra es de: "+promedioAlcohol);
		}
	}
	console.log ("El total de unidades compradas de jabón es "+acumuladorJabon);
}
