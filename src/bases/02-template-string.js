const nombre = "Anderson";
const apellido = "Navarro";

//Template String
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre
}
console.log(`EL siguiente texto proviene de una funcion: ${getSaludo(nombre)}`)
