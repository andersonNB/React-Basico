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
  const UseContexto = ({ nombre, edad, clave, poder='Inteligencia' }) => {
    // console.log(nombre + 2, edad, clave, poder);
    return{
      nombreClave: clave,
      anios:edad,
      latlng:{
        lat: 14.12,
        lng: -12.32
      }
    }
  };
  
  const {nombreClave, anios, latlng:{lat, lng}} = UseContexto(persona);
  
  console.log(nombreClave, anios, lat, lng)
  



// otro ejemplo

const personajes = {

    nombreP: 'Goku',
    enemigo: 'Manjin boo',
    saga: 'Dragon Ball z',
    viajeros: {
      nombreV: 'Trunks',
      arma: 'espada'
    },
    torneo:{
      nombreTorneo:'Del poder',
      zona:'cero'
    }
}

const {nombreP, enemigo, viajeros:{nombreV}} = personajes
console.log(nombreP, enemigo, nombreV)

console.log('------------------------------------------------')

const pruebaConflecha = ({enemigo, saga, torneo})=>{

  return{
    nombreRenemigo: enemigo,
    nombreRsaga: saga,
    nombreRtorneo: torneo
  }
}
const {nombreRenemigo, nombreRsaga, nombreRtorneo:{nombreTorneo}} = pruebaConflecha(personajes)
console.log(nombreRenemigo,nombreRsaga,nombreTorneo)