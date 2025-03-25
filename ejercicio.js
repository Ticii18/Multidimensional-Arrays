const prompt = require('prompt-sync')();

let personas = [];
let telefonos = [];

let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");
let dni = parseInt(prompt("Ingrese su DNI: "));
let cantidadNumeros = parseInt(prompt("¿Cuántos números de teléfono desea ingresar? "));

for (let i = 0; i < cantidadNumeros; i++) {
    let telefono = prompt("Ingrese el número de teléfono : ");
    telefonos.push(telefono);
}

personas.push(nombre, apellido, dni, telefonos);
console.log(personas);
