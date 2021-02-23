/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    //Declaraciones
    var tempInicial;
    var tempInicialPar;
    var tempFinal;
    var tempFahr;
    var auxiliarConvertir;

    //Asignaciones
    tempInicial = txtIdTemperatura.value;
    tempFahr = 32;
    auxiliarConvertir = 5/9;

    //Transformaciones
    tempInicialPar = parseInt (tempInicial);

    //Operaciones
    tempFinal = (tempInicialPar - tempFahr) * (auxiliarConvertir);

    //Mostrar
    alert (tempInicialPar+" grados Fahrenheit es igual a "+tempFinal+" grados Centígrados");
}

function CentigradosFahrenheit () 
{
    //Declaraciones
    var tempInicial;
    var tempInicialPar;
    var tempFinal;
    var tempFahr;
    var auxiliarConvertir;

    //Asignaciones
    tempInicial = txtIdTemperatura.value;
    tempFahr = 32;
    auxiliarConvertir = 9/5;

    //Transformaciones
    tempInicialPar = parseInt (tempInicial);

    //Operaciones
    tempFinal = (tempInicialPar * (auxiliarConvertir)) + tempFahr;

    //Mostrar
    alert (tempInicialPar+" grados Centígrados es igual a "+tempFinal+" grados Fahrenheit");
}
