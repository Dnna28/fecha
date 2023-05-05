function calcularDia() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);
  
    if (isNaN(dia) || isNaN(mes) || isNaN(anio)) {
      alert('Por favor, ingrese valores numéricos en los campos correspondientes.');
      return;
    }
  
    if (dia < 1 || dia > 31 || mes < 1 || mes > 12) {
      alert('Por favor, ingrese una fecha válida.');
      return;
    }
  
    const fecha = new Date(anio, mes - 1, dia);
    const diaSemana = fecha.getDay();
  
    let mensaje;
    switch (diaSemana) {
      case 0:
      case 6:
        mensaje = 'día no laborable';
        break;
      default:
        mensaje = 'día laborable';
        break;
    }
  
    const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const nombreDiaSemana = diasSemana[diaSemana];
  
    document.getElementById('resultado').innerText = nombreDiaSemana + ', ' + mensaje;
  }
  
  document.getElementById('calcular').addEventListener('click', calcularDia);