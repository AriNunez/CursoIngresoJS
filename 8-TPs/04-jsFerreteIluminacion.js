/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
   
   Ariel Nuñez-Ferrete Iluminación
*/
 
//SOLO SWITCH
function CalcularPrecio ()
{
   var cantidadLamparitas;
   var descuento;
   var descuentoAplicado;
   var precioFinal;
   var precioUnitarioLampara = 35;
   var precioTotalLamparas;
   var marcaLampara;
   var iigg = 10;
   var iiggAplicado;
   var precioFinalIIGG;
  
  cantidadLamparitas = txtIdCantidad.value;
  cantidadLamparitas =parseInt (cantidadLamparitas);
  marcaLampara = Marca.value;

  switch (marcaLampara) {
      case "ArgentinaLuz":
        switch (cantidadLamparitas) {
            case 5:
               descuento = 40;
               break;
            case 4:
               descuento = 25;
               break;
            case 3:
               descuento = 15;
               break;
            case 2:
            case 1:
               descuento = 0;
               break;   
           default:
              descuento = 50;
              break;
        }
        break;

      case "FelipeLamparas":
         switch (cantidadLamparitas) {
            case 5:
               descuento = 30;
               break;
            case 4:
               descuento = 25;
               break;
            case 3:
               descuento = 10;
               break;
            case 2:
            case 1:
               descuento = 0;   
            default:
               descuento = 50;
               break;
         }
      case "JeLuz":
      case "HazIluminacion":
      case "Osram":
         switch (cantidadLamparitas) {
            case 5:
               descuento = 30;
               break;
            case 4:
               descuento = 20;
               break;
            case 3:
               descuento = 5;
               break;
            case 2:
            case 1:
               descuento = 0;
               break;
            default:
               descuento = 50;
               break;
         }
  }

   precioTotalLamparas = cantidadLamparitas * precioUnitarioLampara;
   descuentoAplicado = precioTotalLamparas * descuento / 100;
   precioFinal = precioTotalLamparas - descuentoAplicado;
   txtIdprecioDescuento.value = precioFinal;

   if (precioFinal >= 120)
   {
     iiggAplicado = precioFinal * iigg / 100;
     precioFinalIIGG = precioFinal + iiggAplicado;
     txtIdprecioDescuento.value = precioFinalIIGG;
     alert ("Ingresos Brutos: Usted pagó "+precioFinalIIGG+", siendo "+iiggAplicado+" el impuesto que se pagó");
   }
}



//DOS FORMAS DE HACERLO CON IF
/*function CalcularPrecio () 
{
   var cantidadLamparitas;
    var descuento;
    var descuentoAplicado;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var precioTotalLamparas;
    var marcaLampara;
    var iigg = 10;
    var iiggAplicado;
    var precioFinalIIGG;
   
   cantidadLamparitas = txtIdCantidad.value;
   cantidadLamparitas =parseInt (cantidadLamparitas);
   marcaLampara = Marca.value;
   descuento = 0;

   if (cantidadLamparitas >5)
   {
      descuento = 50;
   }
   else
   {
      if (marcaLampara == "ArgentinaLuz")
      {
         if (cantidadLamparitas == 5)
         {
            descuento = 40;
         }
         else
         {
            if (cantidadLamparitas == 4)
            {
               descuento = 25;
            }
            else
            {
               if (cantidadLamparitas == 3)
               {
                  descuento = 15;
               }
               else
               {
                  if (marcaLampara == "FelipeLamparas")
                  {
                     if (cantidadLamparitas == 5)
                     {
                        descuento = 30;
                     }
                     else
                     {
                        if (cantidadLamparitas == 4)
                        {
                           descuento = 25;
                        }
                        else
                        {
                           if (cantidadLamparitas == 3)
                           {
                              descuento = 10;
                           }
                           else
                           {
                              if (marcaLampara != "ArgentinaLuz"||marcaLampara != "FelipeLamparas")
                              {
                                 if (cantidadLamparitas == 5)
                                 {
                                    descuento = 30;
                                 }
                                 else
                                 {
                                    if (cantidadLamparitas == 4)
                                    {
                                       descuento = 20;
                                    }
                                    else
                                    {
                                       if (cantidadLamparitas == 3)
                                       {
                                          descuento = 5;
                                       }
                                      
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   }

   precioTotalLamparas = cantidadLamparitas * precioUnitarioLampara;
   descuentoAplicado = precioTotalLamparas * descuento / 100;
   precioFinal = precioTotalLamparas - descuentoAplicado;
   txtIdprecioDescuento.value = precioFinal;

   if (precioFinal >= 120)
   {
     iiggAplicado = precioFinal * iigg / 100;
     precioFinalIIGG = precioFinal + iiggAplicado;
     txtIdprecioDescuento.value = precioFinalIIGG;
     alert ("Ingresos Brutos: Usted pagó "+precioFinalIIGG+", siendo "+iiggAplicado+" el impuesto que se pagó");
   }

}




/*function CalcularPrecio () 
{
 	 var cantidadLamparitas;
    var descuento;
    var descuentoAplicado;
    var precioFinal;
    var precioUnitarioLampara = 35;
    var precioTotalLamparas;
    var marcaLampara;
    var iigg = 10;
    var iiggAplicado;
    var precioFinalIIGG;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if(cantidadLamparitas>5)
    {
        //aplicar descuento del 50%.
        descuento = 50;
    }
    else
    {
        //Menor o = 5
        //Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
        if(cantidadLamparitas == 5)
        {
            if(marcaLampara == "ArgentinaLuz")
            {
                //descuento del 40 %
                descuento = 40;
            }
            else
            {
                //descuendo del 30%
                descuento = 30;
            }
        }
        else
        {
            if (cantidadLamparitas == 4)
            {
               if (marcaLampara == "ArgentinaLuz" || marcaLampara == "FelipeLamparas")
               {
                  //descuento 25%
                  descuento = 25;
               }
               else
               {
                  //descuento 20%
                  descuento = 20;
               }
            }
            else
            {
               if (cantidadLamparitas == 3)
               {
                  if (marcaLampara == "ArgentinaLuz")
                  {
                     //descuento 15%
                     descuento = 15;
                  }
                  else
                  {
                     if(marcaLampara == "FelipeLamparas")
                     {
                        //descuento 10%
                        descuento = 10;
                     }
                     else
                     {
                        //descuento 5%
                        descuento = 5;
                     }
                     
                  }
               }
               else
               {
                  descuento = 0;
               }
            }
        }
    }
    
    precioTotalLamparas = cantidadLamparitas * precioUnitarioLampara;
    descuentoAplicado = precioTotalLamparas * descuento / 100;
    precioFinal = precioTotalLamparas - descuentoAplicado;
    txtIdprecioDescuento.value = precioFinal;

    if (precioFinal >= 120)
    {
      iiggAplicado = precioFinal * iigg / 100;
      precioFinalIIGG = precioFinal + iiggAplicado;
      txtIdprecioDescuento.value = precioFinalIIGG;
      alert ("Ingresos Brutos: Usted pagó "+precioFinalIIGG+", siendo "+iiggAplicado+" el impuesto que se pagó");
    }


}
*/