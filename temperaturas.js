
// Obtener los elementos HTML
const temperatura = document.getElementById("temperatura");
const conversion = document.getElementById("conversion");
const boton = document.getElementById("btnConvertir");
const resultado = document.getElementById("resultado");

// Función para convertir temperaturas
function convertirTemperatura() {

    // Validar que el campo no esté vacío
    if (temperatura.value.trim() === "") {
        alert("Por favor, ingresa una temperatura.");
        return;
    }

    // Obtener el valor ingresado
    let valor = parseFloat(temperatura.value);

    // Identificar el tipo de conversión
    let tipo = conversion.value;
    let convertido;

    // Realizar la conversión correspondiente
    if (tipo === "celsius") {

        convertido = (valor * 9 / 5) + 32;

        resultado.textContent =
            valor + " °C equivalen a " +
            convertido.toFixed(2) + " °F";

    } else {

        convertido = (valor - 32) * 5 / 9;

        resultado.textContent =
            valor + " °F equivalen a " +
            convertido.toFixed(2) + " °C";
    }
}

// Evento del botón Convertir
boton.addEventListener("click", convertirTemperatura);
