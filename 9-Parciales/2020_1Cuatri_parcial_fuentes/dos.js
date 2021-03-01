/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

Ariel Nuñez-Ejercicio 2 Parcial 2020
*/

function mostrar()
{
  var tipoProducto;
  var cantidadProducto;
  var precioProducto;
  var respuesta = true;
  var descuento;


  //CONTADORES
  var contadorArena = 0;
  var contadorCal = 0;
  var contadorCemento = 0;
  var acumuladorArena = 0;
  var acumuladorCal = 0;
  var acumuladorCemento = 0;

  do
  {
    tipoProducto = prompt ("Ingrese el tipo de producto (arena / cal / cemento)");
    tipoProducto = tipoProducto.toLowerCase (tipoProducto);
    while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
    {
      tipoProducto = prompt ("Error,reingrese el tipo de producto (arena / cal / cemento)");
      tipoProducto = tipoProducto.toLowerCase (tipoProducto);
    }

    cantidadProducto = parseInt(prompt("Ingrese la cantidad del producto"));
    while (!(cantidadProducto > 0))
    {
      cantidadProducto = parseInt(prompt("Error, reingrese la cantidad del producto"));
    }

    precioProducto = parseInt(prompt("Ingrese el precio por bolsa"));
    while(!(precioProducto > 0))
    {
      precioProducto = parseInt(prompt("Error, reingrese el precio por bolsa"));
    }

    switch (tipoProducto) 
    {
      case "arena":
        contadorArena++;
        acumuladorArena = acumuladorArena + cantidadProducto;
        break;
    
      case "cal":
        contadorCal++;
        acumuladorCal = acumuladorCal + cantidadProducto;
        break;

      case "cemento":
        contadorCemento++;
        acumuladorCemento = acumuladorCemento + cantidadProducto;
        break;
    }

    if (das)
    {
      
    }


    respuesta = confirm ("¿Desea continuar ingresando?");
  }while (respuesta);


}
