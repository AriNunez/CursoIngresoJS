/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar 
una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.

	Ariel Nuñez-Ejercicio 12 TPs
 */
function ComenzarIngreso () 
{
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroLegajo;
	var nacionalidad;
	var continuarEdad;
	var continuarSexo;
	var continuarEstado;
	var continuarSueldo;
	var continuarLegajo;
	var continuarNacionalidad ;
	var repetir;

	continuarEdad = true;
	continuarSexo= true;
	continuarEstado = true;
	continuarSueldo = true;
	continuarLegajo = true;
	continuarNacionalidad = true;
	repetir = true;

	do
	{
		while (continuarEdad)
		{
			edadIngresada = prompt ("Ingrese su edad (entre 18 y 90 años inclusive)");
			edadIngresada = parseInt (edadIngresada);

			if (edadIngresada >= 18 && edadIngresada <= 90) 
			{
				txtIdEdad.value = edadIngresada;
				continuarEdad = false;
			}
			else
			{
				alert ("Edad ingresada no válida.");
				continuarEdad = confirm("Ingrese nuevamente el dato");
			}
		}

		while (continuarSexo)
		{
			sexoIngresado = prompt ("Ingrese su sexo (M/F)");
			sexoIngresado = sexoIngresado.toUpperCase (sexoIngresado);

			if (sexoIngresado == "M") 
			{
				txtIdSexo.value = "Masculino";
				continuarSexo = false;
			}
			else
			{
				if (sexoIngresado == "F") 
				{
					txtIdSexo.value = "Femenino";
					continuarSexo = false;
				}
				else
				{
					alert ("Sexo ingresado no válido.");
					continuarSexo = confirm ("Ingrese nuevamente el dato");
				}
			}
		}

		while (continuarEstado) 
		{
			estadoCivilIngresado = prompt ("Ingrese su Estado Civil (1-Soltero / 2-Casado / 3-Divorciado / 4-Viudo)");

			if (estadoCivilIngresado == "1") 
			{
				txtIdEstadoCivil.value = "Soltero";
				continuarEstado = false;
			}
			else
			{
				if (estadoCivilIngresado == "2") 
				{
					txtIdEstadoCivil.value = "Casado";
					continuarEstado = false;
				}
				else
				{
					if (estadoCivilIngresado == "3") 
					{
						txtIdEstadoCivil.value = "Divorciado";
						continuarEstado = false;
					}
					else
					{
						if (estadoCivilIngresado == "4") 
						{
							txtIdEstadoCivil.value = "Viudo";
							continuarEstado = false;
						}
						else
						{
							alert ("Estado Civil ingresado no válido.");
							continuarEstado = confirm ("Ingrese nuevamente el dato");
						}
					}
				}
			}
		}

		while (continuarSueldo) 
		{
			sueldoBruto = prompt ("Ingrese su sueldo bruto-NO menor a 8000-(En caso de ingresar decimales, ingresarlo despues de un punto");
			sueldoBruto = parseFloat(sueldoBruto);

			if (sueldoBruto >= 8000)
			{
				txtIdSueldo.value = sueldoBruto;
				continuarSueldo = false;
			}
			else
			{
				alert ("Sueldo bruto ingresado no válido.");
				continuarSueldo = confirm ("Ingrese nuevamente el dato");
			}
		}

		while (continuarLegajo)
		{
			numeroLegajo = prompt ("Ingrese su número de legajo (debe ser numérico de 4 cifras y sin ceros a la izquierda)");
			numeroLegajo = parseInt (numeroLegajo);

			if (isNaN(numeroLegajo) != true )
			{
				txtIdLegajo.value = numeroLegajo;
				continuarLegajo = false;
			} 
			else
			{
				alert ("Número de legajo ingresado no válido.");
				continuarLegajo = confirm ("Ingrese nuevamente el dato");
			}
		}

		while (continuarNacionalidad)
		{
			nacionalidad = prompt ("Ingrese su nacionalidad (A-Argentino / E-Extranjero / N-Nacionalizado)");
			nacionalidad = nacionalidad.toUpperCase (nacionalidad);

			if (nacionalidad == "A")
			{
				txtIdNacionalidad.value = "Argentino/a";
				continuarNacionalidad = false;
			}
			else
			{
				if (nacionalidad == "E") 
				{
					txtIdNacionalidad.value = "Extranjero/a";
					continuarNacionalidad = false;
				}
				else
				{
					if (nacionalidad == "N") 
					{
						txtIdNacionalidad.value = "Nacionalizado/a";
						continuarNacionalidad = false;
					}
					else
					{
						alert ("Nacionalidad ingresada no válida.")
						continuarNacionalidad = confirm ("Ingrese nuevamente el dato");
					}
				}
			}
		}	
		
		continuarEdad = true;
		continuarSexo = true;
		continuarEstado = true;
		continuarSueldo = true;
		continuarLegajo = true;
		continuarNacionalidad = true;

		repetir = confirm ("¿Quiere volver a ingresar los datos? (Aceptar para volver a ingresar O Cancelar para mostrar datos ingresados)");
		
	}while (repetir);

	


	



}
