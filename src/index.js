//Desestructuración
const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

const { nombre } = persona;

console.log(nombre);

// const retornarPersona = (usuario)=>{
//     console.log(usuario)
// }
// retornarPersona(persona)

//utilizando la desestructuración
const retornarPersona = ({ nombre, edad, clave, poder }) => {
  console.log(nombre + 2, edad, clave, poder);
};

retornarPersona(persona);
