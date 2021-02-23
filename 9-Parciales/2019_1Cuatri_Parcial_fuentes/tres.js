/*Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var resultado;

    precio = prompt ("Ingrese el precio del producto");
    precio = parseInt (precio);
    porcentaje = prompt ("Ingrese el porcentaje de descuento");
    porcentaje = parseInt (porcentaje);

    descuento = precio * porcentaje / 100;
    resultado = precio - descuento;
    
    elPrecioFinal.value = resultado;
}
