
  // Función para validar el número máximo de días permitidos en el mes
  function diasEnMes(mes, anio) {
    // La variable "dias" contiene el número máximo de días permitidos en el mes correspondiente
    let dias;
    if (mes == 2) {
      // Febrero tiene 28 o 29 días dependiendo del año
      dias = (anio % 4 == 0 && (anio % 100 != 0 || anio % 400 == 0)) ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(mes)) {
      // Abril, junio, septiembre y noviembre tienen 30 días
      dias = 30;
    } else {
      // Los demás meses tienen 31 días
      dias = 31;
    }
    return dias;
  }
  
  // Función para calcular el día de la semana correspondiente a una fecha ingresada
  function calcularDia() {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let anio = parseInt(document.getElementById("anio").value);
    
     // Validar que el día ingresado sea menor o igual al número máximo de días permitidos en el mes correspondiente
let maxDias = diasEnMes(mes, anio);
if (dia > maxDias) {
  alert("El día ingresado es mayor que el número máximo de días permitidos en el mes correspondiente.");
  return;
}

// Calcular el día de la semana correspondiente a la fecha ingresada
let a = Math.floor((14 - mes) / 12);
let y = anio - a;
let m = mes + 12 * a - 2;
let d = (dia + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

// Definir el nombre del día de la semana correspondiente
let diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let nombreDia = diasSemana[d];

// Mostrar el nombre del día de la semana correspondiente en el resultado
document.getElementById("resultado").innerHTML = "El día " + dia + "/" + mes + "/" + anio + " es " + nombreDia + ".";
}
