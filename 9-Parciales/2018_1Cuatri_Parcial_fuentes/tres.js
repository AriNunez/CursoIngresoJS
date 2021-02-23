function mostrar()
{
    //Declaraciones
    let precioProducto;
    let porcentajeDes;
    let precioProductoPar;
    let porcentajeDesPar;
    let precioFinal;

    //Asignaciones
    precioProducto = prompt ("Ingrese el precio del producto: ");
    porcentajeDes = prompt ("Ingrese el porcentaje de descuento: ");

    //Transformación
    precioProductoPar = parseInt (precioProducto);
    porcentajeDesPar = parseInt (porcentajeDes);

    //Descuento
    precioFinal = precioProductoPar - ((precioProductoPar * porcentajeDesPar)/100);

    //Mostrar
    elPrecioFinal.value = precioFinal;
}
