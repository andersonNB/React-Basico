const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        cuidad: 'New York',
        equipo: 'Avengers',
        poder: 'Inteligencia'
    }
};


// console.table({person:persona});
console.log({persona});

// Esta linea es mala practica
// const persona2 = persona
// lo mejor es así
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona2)