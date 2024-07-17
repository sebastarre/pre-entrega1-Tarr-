// Definición de las prendas y sus precios
const prendas = ["camisa", "pantalón", "falda", "chaqueta", "zapatos"];
const precios = [20, 30, 25, 50, 40];

let total = 0;

function seleccionarPrenda() {
    let seleccion = "";
    while (true) {
        seleccion = prompt("¿Qué prenda quieres comprar? (camisa, pantalón, falda, chaqueta, zapatos)").toLowerCase();
        if (prendas.includes(seleccion)) {
            return seleccion;
        } else {
            alert("Prenda no válida. Intenta de nuevo.");
        }
    }
}

function obtenerPrecio(prenda) {
    for (let i = 0; i < prendas.length; i++) {
        if (prendas[i] === prenda) {
            return precios[i];
        }
    }
    return 0;
}

function continuarSeleccion() {
    let respuesta = "";
    while (respuesta !== "sí" && respuesta !== "no") {
        respuesta = prompt("¿Quieres seleccionar otra prenda? (sí/no)").toLowerCase();
        if (respuesta !== "sí" && respuesta !== "no") {
            alert("Respuesta no válida. Por favor, escribe 'sí' o 'no'.");
        }
    }
    return respuesta === "sí";
}

// Bucle principal
let continuar = true;
while (continuar) {
    let prendaElegida = seleccionarPrenda();
    let precioPrenda = obtenerPrecio(prendaElegida);
    total += precioPrenda;
    alert(`Has agregado ${prendaElegida} por $${precioPrenda}. Total actual: $${total}`);
    
    continuar = continuarSeleccion();
}

// Mostrar el total final
alert(`El total de tu compra es: $${total}`);
