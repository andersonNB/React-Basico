//Promesas en js
import { getHeroeById } from "./bases/08-imp-ex";
import heroes from "./data/heroes";

// const promesa  = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         const heroes = getHeroeById(2)
//          resolve(heroes)

//        reject('No se pudo encontrar el heroe')
//     }, 2000);
// });

// promesa.then((heroesThen)=>{
//     console.log('Heroes:', heroesThen)
// }).catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroes = getHeroeById(id);
    //   console.log(id)
      if (heroes) {
        resolve(heroes);
      } else  reject("No se pudo encontrar el heroe");
      
    }, 2000);
  });

  return promesa;
};
getHeroeByIdAsync(5)
  .then( console.log)
  .catch(console.warn);
