// Variables necesarias
var notas = []; // Array para almacenar las notas ingresadas por el usuario

// Función para capturar las entradas y calcular el promedio
function calcularPromedio() {
    var cantidadNotas = parseInt(document.getElementById('cantidad-notas').value);

    for (var i = 0; i < cantidadNotas; i++) {
        var nota = parseFloat(prompt('Ingrese la nota ' + (i + 1) + ':'));
        notas.push(nota);
    }

    var total = 0;
    for (var j = 0; j < notas.length; j++) {
        total += notas[j];
    }

    var promedio = total / notas.length;
    alert('El promedio es: ' + promedio);
}

// Event listener para el botón de calcular promedio
document.getElementById('btn-calcular').addEventListener('click', calcularPromedio);
