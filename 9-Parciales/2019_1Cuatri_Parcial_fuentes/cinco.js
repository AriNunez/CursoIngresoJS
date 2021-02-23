/*Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%*/

function mostrar()
{
    var continente;
    var cantidadDias;
    var precioDia = 100;
    var totalDias;
    var formaPago;
    var porcentaje;
    var descuentoOaumento;
    var resultado;

    continente = Marca.value;
    cantidadDias = prompt ("Ingrese la cantidad de días");
    cantidadDias = parseInt (cantidadDias);
    formaPago = prompt ("Ingrese la forma de págo (debito, efectivo o mercadopago)");

    switch (continente) {
        case "América":
            porcentaje = -50;
            switch (formaPago) {
                case "debito":
                    porcentaje = porcentaje + (-10);
                    break;
            }
            break;
        
        case "África":
            porcentaje = -60;
            switch (formaPago) {
                case "mercadopago":
                case "efectivo":
                    porcentaje = porcentaje + (-15);
                    break;
            }
            break;

        case "Europa":
            porcentaje = -20;
            switch (formaPago) {
                case "debito":
                    porcentaje = porcentaje + (-15);
                    break;
                case "mercadopago":
                    porcentaje = porcentaje + (-10);
                    break;
                case "efectivo":
                    porcentaje = porcentaje + (-5);
                    break;
            }
            break
    
        default:
            porcentaje = 20;
            break;
    }

    totalDias = cantidadDias * precioDia; 
    descuentoOaumento = totalDias * porcentaje / 100;
    resultado = totalDias + descuentoOaumento;
    alert (resultado);
}   
